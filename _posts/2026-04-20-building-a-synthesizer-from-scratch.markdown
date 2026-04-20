---
layout: post
title: "Building a Synthesizer from Scratch"
date: 2026-04-20
tags: [music, programming]
---

Started building a simple subtractive synthesizer in Rust using `cpal` for audio I/O. The goal is a working oscillator, an ADSR envelope, and a low-pass filter before touching MIDI. Here is where things stand after about three weeks.

## Oscillators

The first thing to get right is the oscillator. All it does is produce a repeating waveform at a given frequency. A sine wave is the simplest case:

```rust
pub struct Oscillator {
    pub frequency: f32,
    pub sample_rate: f32,
    phase: f32,
}

impl Oscillator {
    pub fn next_sample(&mut self) -> f32 {
        let sample = (self.phase * std::f32::consts::TAU).sin();
        self.phase = (self.phase + self.frequency / self.sample_rate).fract();
        sample
    }
}
```

The `phase` accumulator runs from 0.0 to 1.0 and wraps. For a 440 Hz tone at 48000 Hz sample rate, we advance by `440.0 / 48000.0 ≈ 0.00917` per sample.

Square and sawtooth are trivial on top of this:

```rust
pub fn square(&mut self) -> f32 {
    if self.next_sine() >= 0.0 { 1.0 } else { -1.0 }
}

pub fn sawtooth(&mut self) -> f32 {
    self.phase * 2.0 - 1.0
}
```

> **Aliasing warning:** Naive sawtooth and square waves alias badly at higher frequencies. A real implementation needs PolyBLEP or pre-computed wavetables. I'll get to that.

## ADSR Envelope

An ADSR envelope controls amplitude over time in four stages: Attack, Decay, Sustain, Release.

| Stage   | Trigger      | Behaviour                          |
|---------|--------------|------------------------------------|
| Attack  | Note on      | Ramp from 0 to 1 over `attack` sec |
| Decay   | After attack | Ramp from 1 to `sustain` level     |
| Sustain | Held         | Hold at sustain level              |
| Release | Note off     | Ramp from current to 0             |

```rust
pub enum Stage { Idle, Attack, Decay, Sustain, Release }

pub struct Adsr {
    pub attack:  f32,
    pub decay:   f32,
    pub sustain: f32,
    pub release: f32,
    stage:       Stage,
    level:       f32,
    sample_rate: f32,
}

impl Adsr {
    pub fn note_on(&mut self)  { self.stage = Stage::Attack; }
    pub fn note_off(&mut self) { self.stage = Stage::Release; }

    pub fn next_sample(&mut self) -> f32 {
        match self.stage {
            Stage::Attack => {
                self.level += 1.0 / (self.attack * self.sample_rate);
                if self.level >= 1.0 {
                    self.level = 1.0;
                    self.stage = Stage::Decay;
                }
            }
            Stage::Decay => {
                self.level -= (1.0 - self.sustain) / (self.decay * self.sample_rate);
                if self.level <= self.sustain {
                    self.level = self.sustain;
                    self.stage = Stage::Sustain;
                }
            }
            Stage::Release => {
                self.level -= self.sustain / (self.release * self.sample_rate);
                if self.level <= 0.0 {
                    self.level = 0.0;
                    self.stage = Stage::Idle;
                }
            }
            _ => {}
        }
        self.level
    }
}
```

The tricky edge case is retriggering: if `note_on` fires while the envelope is still in Release, the attack should start from the *current* level rather than zero. Otherwise you get a click. The fix is one line — `self.level` is already non-zero when the transition happens, so no reset needed as long as you don't zero it on `note_on`.

## Audio Output with cpal

Wiring the oscillator and envelope into `cpal` is mostly boilerplate:

```rust
let stream = device.build_output_stream(
    &config,
    move |data: &mut [f32], _| {
        for sample in data.iter_mut() {
            *sample = osc.next_sample() * env.next_sample();
        }
    },
    |err| eprintln!("audio error: {err}"),
    None,
)?;

stream.play()?;
```

The closure runs on the audio thread. The golden rule: **never allocate, never lock, never block** inside it. Everything the closure needs must be moved in or communicated via lock-free channels (`ringbuf` is my current choice).

## Benchmarks

Running on a Ryzen 5 with a 256-sample buffer at 48 kHz:

| Component            | CPU (%) |
|----------------------|---------|
| Oscillator (sine)    | < 0.1   |
| ADSR                 | < 0.1   |
| Naive sawtooth       | < 0.1   |
| PolyBLEP sawtooth    | ~0.3    |

Completely negligible. The overhead will matter once there are 32+ voices running simultaneously.

## Next Steps

1. Implement a Moog-style ladder filter
2. Add polyphony with a voice pool
3. Wire up MIDI input via `midir`
4. Fix the aliasing on sawtooth/square

---

The code is on GitHub. It won't compile without the `cpal` and `ringbuf` crates in `Cargo.toml`, but the oscillator and envelope modules are self-contained if you want to lift them.
