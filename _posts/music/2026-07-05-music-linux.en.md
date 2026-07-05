---
layout: post
title: "Music on Linux"
lang: en
permalink: /2026/07/05/musica-no-linux/
tags: [music, music-production, linux]
---

It's been a few years since I went back to using Linux 100% of the time on my
personal computer, and one of the reasons I had stopped doing that almost 20
years ago was my music production software.

> To be clear, I use AI to __translate__ the posts, not to write them. At
> least one version of each will have been written manually by me, with no
> code assistants. In this case, that's the Portuguese version.

## Software

I used to rely on a lot of proprietary software that only runs natively on
Windows or MacOS, like [FL Studio](https://www.image-line.com/fl-studio/),
[Maschine](https://www.native-instruments.com/en/products/komplete/drums/maschine/),
[Ableton Live](https://www.ableton.com/en/live/), and various
[VST](https://www.steinberg.net/technologies/vst/) plugins that are made
exclusively for Windows and MacOS.

My main software is FL Studio, and it's well known that this one in particular
can even run on Linux using [Wine](https://www.winehq.org/). However, a common
trait of music production software is that they have elaborate interfaces and
make heavy use of graphics acceleration. Most of them depend heavily on DirectX,
compositing effects, etc.

When I run FL Studio on Linux, the experience is sub-par: random crashes, the
interface breaking in specific spots, and other little things that aren't
obvious at first glance, resulting in reports of "it works 100% fine", but that
completely break the workflow when doing something more serious.

## Looking for Alternatives

I need alternatives for the following:

- DAW - That's FL Studio, Ableton Live, etc.
- Sound Synthesis Plugins - These are the VST plugins for sound generation
  (synthesizers) like
  [Massive](https://www.native-instruments.com/en/products/komplete/synths/massive/),
  [Sytrus](https://www.image-line.com/plugins/Synths/Sytrus/),
  [Serum](https://www.xferrecords.com/products/serum-2), etc.
- Audio Processing Plugins - plugins for:
  - N-band equalizer
  - Delay
  - Reverb
  - Multiband compressor
  - Limiter
  - Among others.
- Audio Editor - [Edison](https://www.image-line.com/plugins/Tools/Edison/),
  [Sound Forge](https://www.magix.com/us/music/sound-forge/),
  [Audacity](https://www.audacityteam.org/), etc.

99% of what I need was covered by the FL Studio + Maschine combo, with most of
FL Studio's built-in plugins solving the problem _well_.

I need not just an alternative, but something _good_. One example is the audio
editor, where I could simply already be using Audacity on Windows. However, the
Edison that comes with FL Studio is _far_ superior in terms of performance,
workflow, and functionality for music production, on top of being integrated
into FL Studio.

Fortunately, nowadays there's a wealth of software that covers this scope and is
available for Linux. And not just Open Source software, but also commercial
software equivalent in functionality and quality to the ones mentioned above. A
few examples:

- DAW -> [Bitwig Studio](https://www.bitwig.com/),
  [Renoise](https://www.renoise.com/),
  [Waveform](https://www.tracktion.com/products/waveform-free), etc.
- VST Plugins:
  - [Vital](https://vital.audio/)
  - [u-He](https://u-he.com/) plugins
  - Entire suites of FOSS plugins I'll mention later.

Right now it's more a matter of picking a piece of software, learning how to set
everything up, and spending some time learning how to use the whole thing.

## The DAW: Renoise

I settled on Renoise as my DAW. I'm not sure if this is something I'll come to
regret later, since it completely changes the editing approach.

FL Studio is a _Sequencer_-style editor, where you see the tracks on screen,
with sound clips, midi, etc. on a normally horizontal timeline. It's the most
common model, and the closest commercial alternatives are Bitwig Studio and
Waveform.

Renoise, on the other hand, is a _Tracker_-style DAW, being one of the few
commercial and _full featured_ options for this. A tracker is quite different:
it lays out the song's tracks vertically, and you type the note and effect
values directly into the grid. It's an approach based on software that used to
be mainly used on the Amiga, like
[FastTracker II](https://en.wikipedia.org/wiki/FastTracker_2).

There are ports of old Trackers like FastTracker for Linux, like
[MilkyTracker](https://milkytracker.org/), which is even free, but I want
something that works like a modern DAW with the style of an older tracker.

I don't have any experience with trackers, but I'm willing to learn.

## Effect Plugins

I ended up deciding to get the
[DAW Essentials Collection](https://www.tracktion.com/products/daw-essentials-collection)
from Tracktion for a few reasons:

- A cohesive plugin bundle, with a similar interface and similar behavior.
- Tracktion is a well-known company that makes quality products (even though I'm
  not a fan of their DAW, but that's a matter of preference).
- The site had 40% off everything, which made the plugins end up cheaper than a
  night out at a steakhouse.

There are FOSS plugin packs that serve a similar purpose (the plugins from
[SocaLabs](https://socalabs.com/), for example), but I prefer an established
market product that will bring me stability.

Once I'm comfortable with the new setup, I can test the open source plugins some
more and decide whether it's worth replacing the commercial ones.

## Sound Synthesis Plugins

This is where things get __expensive__. What I ended up deciding to do is:

- Embrace FOSS plugins as much as possible.
- Use free plugins.
- Use solutions like [Cardinal](https://github.com/DISTRHO/Cardinal) to build
  ad-hoc synthesizers.

A plugin like Massive or Serum costs in the hundreds of dollars, and I had set a
tight budget of not spending more than 300 Reais on this whole plugin adventure.
I already owned my Renoise license, so that doesn't count toward this limit, but
the Tracktion plugins cost around 200 reais.

What I need is the following:

- A simple additive synthesis plugin, with capabilities similar to FL Studio's
  3xOsc. Yes, a plugin like that is quite useful and can be paired with the DAW
  Essentials effects to generate simpler but polished sounds.
- An FM synthesis plugin or a hybrid one. I used to mainly use Sytrus and
  Massive for that.

For that reason I ended up going with the following:

- Vital as one of my main plugins, since it has a free version and the upgrades
  are reasonably priced ($25 for the Plus tier).
- Cardinal as one of the plugins for when I want to do weirder/more elaborate
  things.
- Eventually buying
  [Zyn-Fusion](https://zynaddsubfx.sourceforge.io/zyn-fusion.html), which is
  reasonably priced (starting at $45) and is a legendary synthesizer from the
  Open Source world (ZynAddSubFx) but with a better interface.

### Using Windows Plugins

Besides using Vital and Cardinal, I also want to see how using
[yabridge](https://github.com/robbert-vdh/yabridge) to run plugins like Massive
and Sytrus works. I have stand-alone licenses for both plugins, plus a few more
from [Native Instruments](https://www.native-instruments.com/).

The idea behind yabridge is to run Windows plugins on Linux, so that they work
with Linux VST hosts.

I won't cover my experience with this in this post, since it's still something I
need to figure out how to make work (e.g.: I need that
[Native Access](https://www.native-instruments.com/en/specials/native-access/)
nonsense to be able to _download_ Massive). Once I reach a conclusion I'll write
a post about it.

### Open Source Options

When I got started in the music world, I used _a lot_ of free and open source
plugins from developers like daedalus. I still want to go back and explore these
plugins, since there are some very specific things only they do (like emulating
certain old computer chipsets). But right now I know pretty well what I want to
produce, and it's something that needs more general synthesis capabilities and
samples.

## Setup

Before starting to use the software, some system configuration is needed. In my
case, I use Ubuntu, where the default audio server is
[pipewire](https://pipewire.org/). Software like Renoise expects to use
[ALSA](https://www.alsa-project.org/) or [Jack](https://jackaudio.org/) as the
audio server, due to buffering and latency concerns. I have an Audio interface
that's compatible with Linux
([Komplete Audio 6](https://www.native-instruments.com/en/pricing/komplete-audio-6/)
MK1), so it's just a matter of setting things up so the software uses it
correctly.

### Pipewire-Jack

In the Linux world, Jack is kind of the equivalent of ASIO. With it, you can use
the audio interface with lower latency. However, with Pipewire, just installing
`jackd` doesn't work. We need to install `pw-jack`:

```bash
sudo apt install pipewire-jack qjackctl
```

The command above also installs [qjackctl](https://qjackctl.sourceforge.io/),
which is the best interface for controlling and configuring Jack's routing.

There's a problem: when Renoise starts, it tries to run on a Jack server that's
already running on the system, and if it can't find one, it tries to start a new
one. However, it tries to start `jackd` instead of `pw-jack`, which is a jack
daemon connected to pipewire.

For that to happen, we need to start applications from the terminal using the
`pw-jack` command before the application's name:

```bash
pw-jack renoise
```

This is inconvenient because we have to keep opening a terminal to launch
applications. Not only that, we need to use the terminal for every single
application we want to start.

The simplest solution is to create a system-level link, replacing `jackd` (which
gets installed as a dependency of `qjackctl`) with `pw-jack`:

```bash
sudo cp /usr/share/doc/pipewire/examples/ld.so.conf.d/pipewire-jack-*.conf /etc/ld.so.conf.d/
sudo ldconfig
```

This will make it so that every time a piece of software tries to use the
default `jackd`, it uses `pw-jack` instead.

> One really important and kind of annoying thing: for the system to
> "transition" into real-time audio mode, there can't be any application playing
> sound. At first this isn't a problem if you're a focused person who makes
> music in silence. That's not my case, I listen to YouTube and make music at
> the same time, and my YouTube causes Renoise to stop working properly. The
> solution is simple: pause YouTube, go to settings -> audio -> reinitialize,
> and only then hit play on YouTube again.

### VSTs

VST plugins need to live in a folder that gets scanned by whichever software
you're using. In Renoise, this path is defined by the `VST_PATH` and `VST3_PATH`
environment variables. Besides that, some folders are the default, like
`~/.vst3`. In this case, what I found best was to create a VSTs folder in my
documents folder and replace `~/.vst` and `~/.vst3` with links.

My Documents folder is synced to the cloud, which means that if I reinstall my
machine or end up losing my drive, I can reproduce the setup easily after
setting up the machine again.

> This is something pretty important, since projects depend on the loaded
> plugins working for them to sound the way they're supposed to. It's a _drag_
> to keep reinstalling and reconfiguring VSTs every time something happens to
> the system, even on a Windows environment where most things work with an
> installer. I've been through this a lot already, so I'm already taking
> precautions.

```bash
rm -rf ~/.vst
rm -rf ~/.vst3
ln -s ~/.Documents/musica/vst/vst2/ ~/.vst
ln -s ~/.Documents/musica/vst/vst3/ ~/.vst3
```

Some VSTs will install directly into the VST folders, since they're distributed
as `.deb` packages. Others need to be unpacked into a folder, and these links
help exactly with the ones that need to be unpacked manually.

## What's Next

Once everything is configured, Renoise can load the VSTs and I can start playing
around with it.

![Renoise](/assets/posts/musica/1/renoise.png)

Now the fun part begins: experimentation, hyperfocus, and noise. I should start
using the plugins I bought, test new plugins, and start posting what I find (and
make) here.

See you next time. 👀
