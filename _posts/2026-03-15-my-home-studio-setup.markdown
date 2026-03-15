---
layout: post
title: "My Home Studio Setup in 2026"
date: 2026-03-15
tags: [music]
---

After a few years of rearranging gear and redoing cables, I finally landed on a setup that gets out of the way. Nothing exotic. Here is what I'm running and why.

## Signal Chain

```
Instruments / Mics
      │
      ▼
Focusrite Scarlett 4i4  (interface)
      │
      ▼
Yamaha HS5  (monitors)    +    Sony MDR-7506  (headphones)
```

Straightforward. The interface is the only thing that matters in this chain — everything else is downstream of its preamp quality and driver stability.

---

## Interface: Focusrite Scarlett 4i4

Two mic preamps, two instrument inputs, separate headphone output with its own volume knob. Drivers on Linux via ALSA/JACK are rock solid. I've had zero unexplained dropouts in three years.

> The Gen 4 added a built-in compressor and air mode on the preamps. I use both occasionally but they're not the reason to buy it.

Latency configuration in `/etc/security/limits.conf`:

```
@audio  -  rtprio   99
@audio  -  memlock  unlimited
@audio  -  nice     -19
```

And with JACK at 48 kHz, 128-sample buffer:

```bash
jackd -P75 -dalsa -dhw:Scarlett4i4 -r48000 -p128 -n2 &
```

Round-trip latency is around 6ms. Comfortable for playing live without noticeable delay.

---

## Monitors: Yamaha HS5

Honest mid-range monitors. The low end below ~60 Hz is genuinely absent, which is their biggest weakness. I've mixed on them long enough to compensate mentally, but it still bites me occasionally on kick and bass decisions.

| Spec           | Value            |
|----------------|------------------|
| Woofer         | 5"               |
| Tweeter        | 1" dome          |
| Freq response  | 54 Hz – 30 kHz   |
| Amplification  | 45W + 25W biamp  |
| Input          | XLR / TRS combo  |

Placed on cheap foam isolation pads, roughly at ear height, equilateral triangle with my head at the listening position. The room treatment makes a bigger difference than the monitor placement details.

---

## Room Treatment

Bare walls in a small room are brutal. The current treatment:

- **4× DIY absorption panels** (600 × 900 mm, 100mm rockwool, fabric-wrapped) on the side walls at the first reflection points
- **2× corner bass traps** floor-to-ceiling, front corners
- **Bookshelf diffusion** on the rear wall — not ideal but better than more absorption there

Measured RT60 with REW before and after treatment:

| Frequency | Before | After  |
|-----------|--------|--------|
| 125 Hz    | 480 ms | 210 ms |
| 250 Hz    | 310 ms | 160 ms |
| 500 Hz    | 220 ms | 120 ms |
| 1 kHz     | 190 ms | 105 ms |

Not perfect, but good enough to trust what I'm hearing.

---

## DAW: Reaper

Runs natively on Linux. Incredibly stable. Startup time under a second. The customisation surface is deep enough that I've never hit a workflow it couldn't accommodate.

Key configuration I always set up on a fresh install:

```
Options → Preferences → Audio → JACK
  → Enable JACK audio
  → Sample rate: 48000
  → Buffer size: 128

Options → Preferences → Plug-ins → VST
  → Add path: ~/.vst
  → Add path: ~/.vst3
```

I use a handful of VSTs through `yabridge` for Windows plugins. Setup:

```bash
yabridgectl add ~/.wine/drive_c/Program\ Files/Common\ Files/VST3
yabridgectl sync
```

Most of the time I stay with native Linux plugins. The `lsp-plugins` collection covers the vast majority of mixing needs.

---

## What I'd Change

1. **Subwoofer or larger monitors.** The missing low end is a real limitation for anything with significant bass content.
2. **Better acoustic measurement.** REW is fine but I should do a more rigorous calibration pass.
3. **Hardware compressor on the input.** Purely optional, but I miss having one from a previous setup.

Nothing urgent. The setup works and I spend more time making things than thinking about gear, which is the point.
