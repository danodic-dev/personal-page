---
layout: post
title: "What I Use on Linux (2026)"
lang: en
permalink: /2026/07/12/lo-que-uso-en-linux/
tags: [linux]
---

> To be clear, I use AI to __translate__ the posts, not to write them. At least
> one version of each will have been written manually by me, with no code
> assistants. In this case, that's the Spanish version.

Today we have a simpler post, but one about a curiosity I was talking about with
a friend. We were talking about which software we use on our PCs with Linux
installed. It's not as obvious as it might seem.

## What Are the Softwares?

### Web Browser: `Firefox`

The most obvious choice, but a solid decision. I don't like browsers based on
[Chromium](https://www.chromium.org/chromium-projects/), and
[Firefox](https://www.mozilla.org/firefox/) works well on Linux (it's terrible
on Windows). The most recent versions gained some much-needed improvements, like
the ability to switch profiles from the UI (without having to open
`about:profiles`).

I don't use the VPN features, online sync, etc. I only use the browser itself,
and that's enough. One of the things I like most about Firefox is the vertical
tabs, which work really well, especially when combined with tab groups.

I use the browser for other things that replace local software:

- Email
- [WhatsApp](https://www.whatsapp.com/)
- Calendar

### Office Suite: `Libre Office`

I mainly use [Libre Office](https://www.libreoffice.org/)'s spreadsheets, and
I've had a good experience with them. It's not the prettiest software, and
sometimes it can look a bit too much like Office 2003, but I can do everything I
need with it.

Another convenient thing is that most distros come with Libre Office installed
by default.

### Code Editor: `Zed`

I've been using [Zed](https://zed.dev/) for a few weeks now, and I don't know if
I'm going to stop.

Over the last 6 years I mainly used [JetBrains](https://www.jetbrains.com/)'s
IDEs ([PyCharm](https://www.jetbrains.com/pycharm/), [IntelliJ
Idea](https://www.jetbrains.com/idea/)) and
[VSCode](https://code.visualstudio.com/). But JetBrains' IDEs have had a
performance degradation that I felt mostly in PyCharm, and that led me to cancel
my subscription to the All Tool Bundle from [JetBrains
Toolbox](https://www.jetbrains.com/toolbox-app/).

VSCode has another problem: the absurd addition of AI features I have no
interest in. The editing experience hasn't improved in a long time, and the
ecosystem is full of old junk that's no longer maintained. Most of what gets
added in the recent releases is just for AI — we don't get many
editing-experience improvements anymore.

In my search for other editors, I tried:

- [Emacs](https://www.gnu.org/software/emacs/)
- [Helix](https://helix-editor.com/)
- Zed
- [Sublime Text](https://www.sublimetext.com/)

Zed is the editor that, so far, is giving me the best editing experience. No
weird keyboard shortcuts, no modal editing, and with a modern look & feel. It's
true that Zed has AI features, but they aren't invasive, and you can use it
without getting bombarded with messages offering these AI features all the time.

### Disk Sync: `InSync`

[InSync](https://www.insynchq.com/) is the first piece of Linux software I
bought, back in 2022, to automatically sync my disks to the internet. The
service I use is [Microsoft 365](https://www.microsoft.com/microsoft-365)
because it has the best price-per-GB ratio.

GNOME's sync features don't sync the way I want (just a few folders, with
filters), and InSync does this job very well. InSync has
[OneDrive](https://onedrive.live.com/about/) sync features that aren't even
available in Windows' native OneDrive integration.

### Virtualization: `VirtualBox`

It's just the same virtualization software I've been using for 20 years. I did
try [GNOME Boxes](https://apps.gnome.org/Boxes/), but on
[Ubuntu](https://ubuntu.com/) you need to install extra packages to get it
working, and I don't have the patience for that.

### Containers: `Podman`

I used [Docker](https://www.docker.com/) as my container platform for almost 10
years, to the point where [Podman](https://podman.io/) is able to replace Docker
without major problems.

Sometimes Podman doesn't work all that well with the
[Testcontainers](https://testcontainers.com/) library, but Testcontainers'
support for Podman has improved a lot, and I can't even remember the last time I
needed to swap Podman for Docker.

### Video Games: `Steam`

I use [Steam](https://store.steampowered.com/), like everyone else who games on
Linux these days.

### Pixel Editor: `GIMP` and `Aseprite`

I've used [GIMP](https://www.gimp.org/) since 2001. I don't think GIMP has had
any relevant improvements in the last 10 (?) years — it's stable (on Linux) and
does most of what I need.

For things more related to pixel art, I prefer to use
[Aseprite](https://www.aseprite.org/).

### Vector Editor: `Affinity` & `Graphite`

I used [Affinity Designer](https://affinity.serif.com/en-us/designer/) a lot on
Windows. When I bought the license on Windows, Affinity was the best alternative
to [Adobe Illustrator](https://www.adobe.com/products/illustrator.html), with a
good price and a lot of capability.

I don't like the fact that [Canva](https://www.canva.com/) bought Affinity and
created a free version with paid AI features. It looks good on the surface, but
the product is going to die if the AI features don't sell.

Since Affinity 2 (and now version 3) it's possible to run Affinity on Linux
using [Wine](https://www.winehq.org/). The experience isn't great, but it's
possible. I've used [Graphite](https://graphite.rs/) and I'm planning to migrate
to it once it's more capable.

I don't like [Inkscape](https://inkscape.org/).

### 3D Modeling: `Blender`

I've used [Blender](https://www.blender.org/) since 2004 or 2005. For me it's
second nature, and it's an excellent piece of software.

### Video Editing: `Blender`

And I use Blender so much that it's easier for me to learn [Blender
VSE](https://www.blender.org/features/video-editing/) than to learn another
piece of software.

Blender VSE isn't perfect, but for simple video editing it's more than enough.
And the best thing about Blender is that the pace of improvement is very fast,
and the video editor is improving significantly with every version.

### CAD: `FreeCAD`

It's not really a choice. It's the least bad of everything I tried for
parametric 3D part design.

It's not something I use enough to justify buying a
[BricsCAD](https://www.bricsys.com/en-intl/bricscad/) license, so I use
[FreeCAD](https://www.freecad.org/) and deal with its problems and quirks.

### Audio Editor: `Tenacity` / `Audacity`

This one's also for lack of a better option.
[Audacity](https://www.audacityteam.org/) is capable and not bad, but I was used
to much more capable alternatives, like Edison in [FL
Studio](https://www.image-line.com/fl-studio/).

Audacity needs a UI revamp so it looks like something made after 2010.

### Audio Workstation: `Renoise`

It's a good DAW for those who want a Tracker instead of a Sequencer. For many
it's the only option with professional capabilities and a Tracker style (even on
Windows).

It's not expensive for what it offers, and it's very stable.

### Speech to Text: `Buzz`

[Buzz](https://github.com/chidiwilliams/buzz) is a piece of software I use to
convert audio recordings into text. With Buzz I can do the whole STT process
locally and offline. Since STT is a fast process, I can use large models with
the CPU and RAM, without needing GPU memory.

---

These are the main pieces of software I use on my computer, but they're not the
only ones. Until pretty recently, I've been trying out new software that might
serve my needs better. But the ones listed in this post are the ones I like the
most, or that I've been using the longest.
