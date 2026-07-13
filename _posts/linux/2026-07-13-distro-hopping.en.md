---
layout: post
title: "Distro Hopping"
lang: en
permalink: /2026/07/13/distro-hopping/
tags: [linux]
---

> To be clear, I use AI to __translate__ the posts, not to write them. At least
> one version of each will have been written manually by me, with no code
> assistants. In this case, that's the Portuguese version.

## Motivation

I've been a Linux user for a long time, and recently I did a bit of distro
hopping. I tried several distributions, like
[Fedora](https://fedoraproject.org/), [openSUSE](https://www.opensuse.org/), and
some [Arch](https://archlinux.org/) derivatives.

A few friends asked me to describe a bit of that experience and give my
recommendation on what I ended up deciding to use. For the last 4 years I've
been using [Ubuntu](https://ubuntu.com/) LTS exclusively. I started on 20.04,
then soon migrated to 22.04, then to 24.04, and now I'm on 26.04. I want to use
this space to talk a bit about my experience with Ubuntu LTS, what my opinion
was of the distributions I tried, and what I end up recommending after all this
distro hopping.

## User Profile

Talking a bit about my user profile: I'm no longer the kind of person who likes
tinkering with their computer. That was my profile 15, 20 years ago, but
nowadays it's been a good while since I became a lot more pragmatic. I don't
want to keep customizing the desktop, I don't want to keep fixing little
problems, poking around in the terminal to do things I'd expect the system to
have already solved on its own. I don't have much time to spend fixing problems
in front of the computer — the time I have is for sitting down and doing what I
actually want to do.

That's why it's very important to me — actually, it's the most important thing —
that, whatever distribution I install on my machine, I won't waste much time
configuring things or fixing problems. That's crucial, and it was a
disqualifying factor for several of the distributions I ended up testing.

Precisely because of that, I don't care much about some aspects, like how free
the software I'm using is, or whether a driver is proprietary or not. I just
want things to work. And my hardware isn't the most "standard" out there: the
experience of using machines with a 100% Intel chipset tends to be pretty
uniform, because everything — processor, chipset, graphics — is Intel, and it
all fits together neatly. The machine I use, though, is a Lenovo Legion 5i, with
an Intel chipset, but with hybrid graphics between the Intel Xe Iris and an
Nvidia 4060. That hybrid graphics setup brings some challenges regarding which
distributions I can use — not just because of the hybrid graphics itself, but
also simply because I need to install the Nvidia drivers, which is something I'm
not very willing to spend time doing.

I've been used to installing these drivers since the days when we'd download the
installer straight from Nvidia's website to run on Linux. Nowadays there are
better solutions for that, but I still don't want to waste time on that process.
That's a pretty important aspect in my decision-making.

## What Needs to Just Work

The first thing I need to just work, right out of the gate, with no major
headaches, are video codecs. In most distributions, if you don't install the
codecs, you can't even play video on [YouTube](https://www.youtube.com/). And
unfortunately YouTube is an integral part of my life and my routine — I always
have a YouTube window open, I work while listening to YouTube, I do my personal
stuff while listening to YouTube, it's something that's always there. Usually
the first thing I do when I install a distribution on a new machine is copy my
browser profile over, so my accounts are already logged in, go to YouTube, and
start watching something. So YouTube is very important to me, and that directly
impacts the need to have video codecs available: without them installed,
[Firefox](https://www.mozilla.org/firefox/) can't play most videos, if not all
of them.

The second thing I need to just work are the video drivers, for a few reasons.
The first is that I have a discrete GPU — I paid more for this machine because
of it, there's no point in not setting it up and using it. But it's not just
that: I also use a dock station with several screens, and the colors on the
external monitors look weird with the Intel graphics. With the Nvidia graphics,
the monitors are much better calibrated, with more accurate colors. With Intel,
the colors look washed out and very different from the color profile of the
laptop screen sitting right next to them; with Nvidia, it's perfect. Could I go
in and make detailed adjustments to the display settings to fix that? I could.
But I don't want to waste time on that — I just want to plug the dock station
into the USB port wired to the Nvidia chip and have everything show up and work
the right way.

## What Is a Linux Distribution

Before talking about what I observed and tested, it's important to give some
context on what defines which distribution we choose — and, above all, to
understand what a distribution is and why we decide to use one or another.

The first detail is why there are so many Linux distributions, and the reason is
even simpler than it seems. Linux, being open source, is open code: anyone can
grab it, download it, and run it. Except Linux is just the kernel, the core of
the system — and on its own it doesn't do much. It needs tools, executables,
etc. In Linux, everything is a program, everything is an executable: mounting a
disk in the kernel, for example, so you can access the files, is done through an
application called `mount` — it's as if on Windows it were an `.exe`. The
graphics server is an application, the desktop environment is an application.
It's all modular, all well separated.

That means each person (or group of people) putting together a distribution can
decide how all of this gets assembled. That's why we call it a "distribution":
someone decided to take the Linux kernel and package it together with a specific
set of tools, configured in a specific way, creating a cohesive package — the
distribution itself.

What mainly changes between distributions are those decisions — they're kind of
philosophical questions. The first and biggest divide that exists is package
management: how packages are installed. Nowadays there are, mainly, three big
groups of distributions: the traditional DEB (Debian/Ubuntu), RPM
(Fedora/openSUSE), and the Arch Linux model, based on PKGBUILD and pacman.

RPM-based distributions come from way back, from [Red Hat
Linux](https://en.wikipedia.org/wiki/Red_Hat_Linux). Nowadays, the most famous
and most used one is Fedora, but we also have openSUSE, which also uses RPM
packages. And to show a bit of these differences: Fedora uses a package manager
called [DNF](https://dnf.readthedocs.io/) to install RPM files, responsible for
searching repositories, resolving dependencies, and installing everything.
openSUSE, on the other hand, has its own package manager,
[Zypper](https://en.opensuse.org/Portal:Zypper). So, even though both use RPM
packages and came from the same base, they use different package management
tools.

Debian-based distributions, meanwhile, use `.deb`, with the
[APT](https://wiki.debian.org/Apt) tool. The more traditional ones only use
`.deb` packages, but [Canonical](https://canonical.com/), in recent years, has
been making a transition from `.deb` packages to `.snap` packages — and APT
itself, which ships with Ubuntu, ends up installing `.snap` in some cases, which
doesn't happen in other distributions.

So that's what changes between them: how each one is configured, some
customizations, philosophical questions — there are several aspects that factor
into this. The way to choose is by testing and understanding what fits your
goals best. That's why I mentioned earlier what my user profile is and what I
need to just work: each distribution is going to work in a different way, and
that's what's going to impact your decision. Sometimes, for some reason, you
don't like Debian's package manager, APT, or you absolutely don't want to use
`.snap` — in that case, Ubuntu isn't the distribution for you, and maybe you'll
go looking at a Fedora, an openSUSE. Sometimes you like to get your hands dirty,
and an Arch Linux is going to be the right solution.

But all of this is something you can test and validate. Nowadays, most of the
popular distributions offer what's called Live Discs, which let you try the
distribution without having to install it on disk. That's a good alternative to
get an initial feeling for what the distribution is like, and decide if you
really want to install it on your machine — that's not what I did, I actually
installed each one on my machine and used it, but it's a valid option.

## Software Availability

One thing we always need to keep in mind when choosing a distribution is
software availability. Some people will ask: "what do you mean? Linux is Linux —
either the software exists for Linux, or it doesn't." And yes, in a way that's
true, but there's a whole world of proprietary software, corporate software,
that we don't usually see packaged for 5, 6, 10 different distributions, the way
it happens with a lot of open source projects. These are pieces of software
provided by private companies, closed-source — sometimes even corporate software
— and we need to understand which distributions have the most support for that
kind of software.

Not only that: a lot of proprietary software isn't tested and validated on every
distribution, because it's usually maintained by a smaller, limited team. Since
it's proprietary software, it isn't available for the community to contribute
to, and so it's only consistently tested against a handful of the more common
distributions. It's a fact that nowadays the two distributions with the best
support for proprietary software are Fedora and, especially, Ubuntu. So, if the
subject is a work workstation where you might need to install those annoying
corporate VPN pieces of software and the like, Ubuntu tends to be the best
option — and not just Ubuntu, but Ubuntu LTS, which is the most "boring" and
traditional option there is. It's the distribution that's going to have support
for that software, that people test, and, above all, the distribution where, if
that software doesn't work, you're going to be able to get support.

But there's also software that isn't corporate, but is proprietary, and ends up
only being tested on a handful of distributions — and a lot of the time they
won't even give you a `tar.gz` to install anywhere. They only provide a `.deb`
and a `.rpm`, and you're on your own to install it wherever you need to.

## Desktop Environments

Another really important aspect of this decision is the distribution's desktop
environment. The Linux world is quite different from the Windows and macOS
world, where, the moment you log into your machine, you always see the same
interface. Since Linux is open and put together from a bunch of different pieces
of software, one of the things that exists — and that I think is one of the
coolest things about Linux — is that there are several desktop environments to
choose from. When I talk about a desktop environment, I'm talking literally
about the machine's shell, the start menu (whether there's one or not), how
windows are shown on screen, how they're organized, how you configure the
machine — all of that is customizable, and you can choose which graphical
interface you want to use.

The two main desktop environments that exist on Linux are
[GNOME](https://www.gnome.org/) and [KDE](https://kde.org/). GNOME has a more
simplified experience; the intent isn't to give you a lot of configuration
options — quite the opposite, it's more closed off, designed as a well-defined,
clear experience, with not much room for customization. GNOME's idea is to be
that desktop environment where you sit down and use it. As a philosophy of use
experience, GNOME tends to have an aura a bit closer to macOS, with a design
language that's similar in some ways. I'll be pretty honest: I used GNOME 3 as
soon as it launched — it was a huge transition from GNOME 2 — but, in the end,
there are things in macOS that look like they were kind of copied from GNOME 3.
So GNOME is its own thing: quite different from Windows, a bit more familiar to
macOS users, but still a very unique, individual proposal — it doesn't try to
copy macOS or Windows, even though the design language has some points that
resemble macOS.

The other major desktop environment is KDE, which is pretty much the exact
opposite of GNOME — and it's interesting precisely because of that, because
they're so different from each other, in opposite ways. KDE looks more like
Windows, bringing an experience much closer to it, but it's way more
customizable — you can even make KDE look like macOS more easily than GNOME
comes close to that. It lets you customize interface themes, sounds, colors,
element positioning, shortcuts — it's extremely configurable. You go into KDE's
control panel and every little thing can be adjusted. It's the exact opposite of
GNOME, which doesn't let you configure much — to give you an idea, even to
change GNOME's interface theme you need to download a separate app, called
[Tweaks](https://apps.gnome.org/Tweaks/), because that's not a feature built
into the default interface. In KDE, on the other hand, all of that is right out
in the open: as soon as you open the settings panel, there's a ton of stuff to
tinker with, configure, and customize, with a design language closer to
Windows'. When you open [Plasma](https://kde.org/plasma-desktop/), which is
KDE's desktop, the first thing you see is something quite similar to a Windows
taskbar, a menu similar to the "Start" menu, and a look and behavior that are
similar too. That's why it tends to be an easier transition for people coming
from Windows.

But it's not just about the desktop environments themselves — it's also the
applications. GNOME has its own suite of applications and a graphics library
called [GTK](https://www.gtk.org/), which makes apps developed with it blend
into the system's look: it looks like it was made to run on GNOME. Can I run an
app made for KDE inside GNOME? I can, but it's going to look like KDE running
inside GNOME — and the same goes the other way. KDE uses a library called
[Qt](https://www.qt.io/), along with a library called KDE Lib (I'm not sure if
that's still the name, it's been a while since I've touched any of this). The
idea is the same: when you open a KDE app inside the KDE environment, the look
is consistent, as if everything had been made for the same environment. And can
I open a GNOME or GTK app inside KDE? I can — it's going to look a bit ugly, but
it works, generally, unless it's a GNOME system app (something to configure
GNOME itself, for example), in which case it doesn't really make sense. The same
goes for KDE. But it can be done.

Linux also has other desktop environments. One of the ones I like most is
[XFCE](https://www.xfce.org/), which I used a lot some 15, 20 years ago. They
tend to offer quite different experiences — XFCE, for example, is very
customizable: you can make it look like older versions of GNOME, like Windows
95, or like its own thing. It was originally created, way back, to resemble
[CDE](https://en.wikipedia.org/wiki/Common_Desktop_Environment), a desktop
environment that was common on Unix systems. What's the advantage of XFCE? It's
very light, it uses way fewer resources on the machine. GNOME and KDE are
heavier; interfaces like XFCE are going to be simpler, with fewer features —
sometimes less pretty, with fewer effects, animations, and transitions —, but
also much lighter, using way fewer resources on your machine.

Most distributions come with either KDE or GNOME by default. However, big
distributions like Fedora and Ubuntu also have "flavors" or "spins": versions of
the base distribution with other desktop environments. Both Ubuntu and Fedora
come with GNOME by default, but there's a version of Ubuntu called
[Kubuntu](https://kubuntu.org/), which comes with KDE, and another called
[Xubuntu](https://xubuntu.org/), which comes with XFCE. It's the same Ubuntu,
the same system base, but with a different default desktop environment, and a
different set of default applications for that environment.

So that's also something you get to choose. When in doubt, what I always
recommend to anyone testing this out is: try GNOME, even if you're coming from
Windows. If you really like Windows, then go ahead and try KDE — otherwise, try
GNOME. If your machine has resource constraints and you're looking to use Linux
to get something lighter, it's also worth trying GNOME or KDE first — they tend
to be much lighter than Windows anyway. But, if that doesn't quite work out, try
XFCE, which is a good interface, pretty complete and quite light.

## Vanilla vs. Customized

The last important detail to understand is the difference between distributions
that ship vanilla software and the ones that ship customized software — and how
customized that software is. The biggest reference nowadays when it comes to
vanilla software is Fedora. It's known for delivering the GNOME desktop
experience as close to original as possible: they don't make any customizations,
what you see is exactly the way GNOME was designed by GNOME's own developers.
Ubuntu, on the other hand, brings customizations to the GNOME interface that
tend to resemble [Unity](https://en.wikipedia.org/wiki/Unity_(user_interface)),
Ubuntu's old interface that was abandoned by Canonical a few years back. These
customizations are sometimes something people like, sometimes not. On Fedora,
you get default GNOME, with the default theme, the default look, the default
effects, and the default applications for the GNOME environment — when you go to
tinker with the system, it's going to be exactly what was shipped. Canonical, on
the other hand, does what they call Ubuntu Desktop: a customization of GNOME
that tweaks the behavior of the application dock, window management, and a few
other smaller things on the desktop. It's still GNOME, but a GNOME with
customizations that Canonical judges to be more user-friendly.

There are also distributions that make more aesthetic, less functional
customizations — [Garuda Linux](https://garudalinux.org/), for example, is a
distribution that focuses a lot on making the desktop pretty, tweaking themes
and the like, and it appeals to a lot of people (to others, not so much). And
there's a third angle: some distributions go beyond customizing the desktop
itself and also customize the look of other software, so it stays consistent
with the rest of the system. Some of them, for example, ship a
[LibreOffice](https://www.libreoffice.org/) theme with icons closer to the rest
of the system's theme, instead of LibreOffice's default theme.

So these are things worth paying attention to. If you like distributions focused
on vanilla, the ideal is to grab something like a Fedora, or even an Arch Linux.
Now, if you like specific customizations, you need to test a few different
distributions to understand what those customizations are. A distribution well
known for having strong customization is openSUSE — it doesn't mess much with
the look or the experience of the software itself, it just brings its own
wallpaper, maybe a more greenish theme, but it has a whole Linux management
system called [YaST](https://yast.opensuse.org/), which is its big
differentiator, and tends to be really good for system administrators. If you're
already a system administrator, already use openSUSE at work, and are already
used to YaST, you can run it on your machine and use it as your desktop, and
YaST is going to be a good option. However, some people don't like this
approach, because YaST ends up duplicating things you have to configure in two
places: one inside GNOME or KDE, and another in YaST itself, letting you
configure the same thing.

So it's a matter of preference. Mine is for vanilla software, but not entirely —
I do value some customizations, and I think Ubuntu's desktop customizations are
good. I'm not that fond of GNOME's vanilla experience. And that already gives
away a bit of what my distribution recommendation is going to be after all this
distro hopping.

## Recommendation: Ubuntu

So yeah, in the end I still use Ubuntu, and I still recommend Ubuntu. And that's
interesting, because a lot of people recommend [Linux
Mint](https://linuxmint.com/) (which is based on Ubuntu), a lot of people
recommend Fedora, a lot of people recommend openSUSE — but, at the end of the
day, for me, what works 100% and meets every requirement is still good old
Ubuntu. I'll explain why.

**Drivers.** I don't need to install a video driver. Up through version 24.04 I
still needed to go in and enable the proprietary graphics drivers, but it was a
matter of 3 clicks. Starting with 26.04, I don't even need to do that anymore:
it detects that I have a dedicated video card, already enables the proprietary
driver, and that's it — it works right off the bat, without me needing to
configure anything.

**Codecs.** During installation, it already asks if I want to use the video
codecs, if I want to download them. Again, it's a checkbox I check and the
codecs are already installed.

**Software availability.** I use some proprietary software — I'm not a 100%
free/open source software user — and all the software I use has been tested and
packaged for Ubuntu. Among them, [InSync](https://www.insynchq.com/), which I
use to sync my disk with [Microsoft
365](https://www.microsoft.com/microsoft-365);
[Renoise](https://www.renoise.com/), the music software I use; among others,
[Mullvad VPN](https://mullvad.net/). All of it has been tested and distributed
for Ubuntu. And that's not all: whenever a new version of Ubuntu LTS comes out,
shortly after everything I need is already available for the software I need. My
experience with more annoying corporate software, like
[CrowdStrike](https://www.crowdstrike.com/) or
[GlobalProtect](https://www.paloaltonetworks.com/sase/globalprotect) from Palo
Alto, is that, even if that software doesn't work all that well on Linux, it's
packaged basically for Ubuntu — some even have a little RPM package, but it's
not even for Fedora, it's usually for [Red Hat
Enterprise](https://www.redhat.com/). Personally, I've had the least bad
experiences with this kind of software on Ubuntu.

**Stability.** Ubuntu doesn't crash, doesn't give me trouble. My machine has
plenty of memory, and the only reason Linux has ever crashed on me was lack of
memory — it doesn't handle that very well, it goes into a crazy swap and the
system just freezes. But my machine doesn't have a significant memory constraint
right now (64 GB), so, for me, it just works — which is really good.

**Customizations.** I can, pretty easily, make Ubuntu's desktop the way I like
it. I use Ubuntu Dock, which is a customization of [Dash to
Dock](https://extensions.gnome.org/extension/307/dash-to-dock/), and it's pretty
easy to set up to keep it down there — it ends up looking similar to the macOS
dock. To me, appearance isn't as important as functionality: both on Windows and
Linux, I like having the app list always visible down there, and GNOME's default
vanilla behavior doesn't suit me. I tried using Dash to Dock directly, and I
didn't like that either.

**What's bad: the Snaps.** [Snaps](https://snapcraft.io/) tend not to have the
same performance as other package formats, because they come with a whole
sandboxing system. On top of that, the fact that snaps exist means
[flatpaks](https://flatpak.org/) end up not fitting into the system all that
well — Fedora works better with flatpak. A lot of the proprietary stuff I use is
already available as a snap, like [JetBrains](https://www.jetbrains.com/)'s IDEs
— you just click and install, and in that respect it's good. But in other
respects, I don't think it's all that great.

**What's bad: the Snap Store.** One of the problems for me isn't even the
package format itself, but the fact that the [Snap
Store](https://snapcraft.io/store) is centralized. I know there's a reason for
that — having a certification authority and a guarantee of authenticity, since,
if there were several Snap Stores, it would basically be like sideloading Snap
software on the platform, and Canonical tries to guarantee that software comes
from certified providers. Except, a few months ago, when I went to install some
software on Ubuntu 26.04, the Snap Store wasn't working, because Canonical was
under a DDoS attack — they say it was from Iran, but it's not entirely clear
what was going on. The fact is that, because of that, the Snap Store was down,
and I couldn't install any software. That's where you see the problems with
centralization. For me, that's a pretty big problem.

Still, Ubuntu is the distribution where I have the highest success rate at
simply installing and using it. And I think people should be recommending it
more for that than for its customizations. There's Linux Mint, for example,
which is a customization of Ubuntu, but it doesn't come with the same desktop —
it comes with another one, which, honestly, I find less appealing, and sometimes
that ends up breaking the user experience a bit. Overall, the Ubuntu experience
is mostly about booting up the system, clicking on things, and just using it.
And I think that's something pretty important.

## Why Not the Others

Now let's talk a bit about the other distributions I tried, and why I'm not
recommending them.

**Fedora.** This was probably where I spent the most time trying to make it
work, and where I got the most frustrated. The first thing I did after
installing the system was install the video drivers — in theory, they should be
installed with a couple of terminal commands, well documented on the Fedora
wiki, using [akmod](https://rpmfusion.org/Howto/NVIDIA). I followed all the
instructions and, after rebooting, the system was completely broken: no driver
running at all. I had to rack my brain to figure out that, when it installed the
Nvidia driver, it had downloaded a newer kernel version, but installed the
driver for the previous one — and that newer version was the one set in
[GRUB](https://www.gnu.org/software/grub/) and that the system used by default
at boot. Except that version had no modules loaded at all: not the Nvidia
graphics, not wi-fi, not bluetooth, nothing. It took me a while to understand
that, after installing the Nvidia driver, you need to run a `dnf upgrade` on the
system, which downloads all the kernel modules for the new version — except
that's not documented anywhere. That was my first big headache.

After fixing that, I did manage to use the system normally, but I couldn't adapt
to GNOME's vanilla experience, and things in general weren't going all that
smoothly — there was always some little detail, some little thing. I also had a
lot of trouble migrating my Firefox profile: in theory it would just be copying
the Firefox folder, but it didn't work. (A side note: this ends up being an
advantage of snaps — usually you just copy the `~/snap` folder to your home
directory, and everything installed via snap goes back to working on a fresh
install.) In the end, the graphics driver problem and all the time I spent on it
wore out my patience, and I ended up deciding not to stick with Fedora.

**Arch Linux, Bazzite, Manjaro, and the like.** Standard Arch Linux needs to be
installed by hand, its own way, and it has a package system somewhat similar to
[Gentoo](https://www.gentoo.org/)'s — I'm not willing to do that. There are
distributions like [Bazzite](https://bazzite.gg/) and
[Manjaro](https://manjaro.org/) that already bring things more ready-made and
easier to install, but that doesn't mean day-to-day use of the system is going
to be simpler. Of those, the only one I actually got around to testing was
Manjaro, and the experience was bad, mainly because of the rolling release,
which makes the desktop unstable. And, honestly, it also runs into the software
availability issue: it doesn't have the same availability that exists for
Ubuntu.

**openSUSE.** I tried it, but the installer didn't even boot on my machine. I
tried disabling [Secure Boot](https://en.wikipedia.org/wiki/UEFI#Secure_Boot)
and a few other things, and it didn't work.

**Linux Mint and Pop!OS.** I didn't get around to testing Linux Mint, but it's
the option everyone recommends, along with [Pop!OS](https://pop.system76.com/).
Honestly, if I'm going to use something based on Ubuntu, I'd rather use Ubuntu
itself — I tend to lean more toward vanilla distributions, and I really only
like the small bit of customization that already comes with Ubuntu.

## Conclusion

So, why, even 20 years later, do I still recommend Ubuntu as the distribution
for anyone who wants to try and learn Linux? Because it's not the fanciest
distribution, the one that's going to bring the most cutting-edge features and
all that, but it's the one that's probably going to work the most reliably on
any hardware, on any machine you have. It's pretty rare to see someone struggle
to boot Ubuntu and get it running — and, a lot of the time, when I see reports
of that on [Reddit](https://www.reddit.com/), it turns out to actually be people
having trouble with the USB installer, not with the system itself. Above all,
Ubuntu has a big company behind it guaranteeing that it's stable, that it's up
to date, and so on. It's not a community project that depends on people's
goodwill — there's a company there making money, and, whether people like it or
not, money is what moves things. A company making money tends to help maintain
that kind of stability and funding for the project.

Fedora has that too, but I don't recommend Fedora because, honestly, most of the
people I know have Nvidia hardware in their laptops, and they're going to need
to install that driver — and it's going to break the first time. And I say that
because I tried reinstalling Fedora a few times, and the result repeated every
single time — and yes, before anyone asks: I waited for akmod to finish
compiling the driver, left the machine alone for over an hour, went and did
something else, came back, rebooted, and had the same problem again. Even so,
Fedora is a good distribution — if your hardware is all Intel, for example,
it'll probably work fine. But, in terms of ease of use, it's a step below
Ubuntu. There are things about it I like — the app store, for example, is way
better than Ubuntu's for me, since it's integrated with
[Flathub](https://flathub.org/) and not with the Snap Store. On the other hand,
it has this thing of being more vanilla software, with some more specific
security features that can be kind of annoying sometimes.

I don't recommend the other distributions for anyone doing their first test
drive. There might be a few interesting ones, like [elementary
OS](https://elementary.io/), which is also focused on ease of use — but, the
same way I don't want to go with a very niche community distribution, I also
don't want one that, on top of being niche, has a whole set of software based on
a niche community, since, by default, it doesn't even use GNOME or KDE.

So that's it: I think people should keep trying Ubuntu. It's old, but it's
stable. It's reliable. It's kind of boring, but it works well. There are Ubuntu
flavors for different purposes — Kubuntu, which comes with KDE instead of GNOME;
Xubuntu, which comes with XFCE instead of GNOME; and even [Ubuntu
Studio](https://ubuntustudio.org/), which already comes with several
repositories and settings ready for anyone working with graphics and audio,
making that kind of use easier. So, for me, Ubuntu or some Ubuntu flavor is my
final recommendation.

After trying this whole bunch of different distributions, I reinstalled Ubuntu
26.04 on my machine, and I'm still using it. As usual.

---

> This post was written from notes and audio clips I recorded and transcribed
> using [Buzz](https://github.com/chidiwilliams/buzz), a speech-to-text (STT)
> tool. Like any automatic transcription, the raw output comes full of
> repetitions, hesitations, and misheard words, so I used an LLM to organize
> that material into flowing text and clean up those rough edges — which
> explains why some parts might sound a bit too "AI" in places. The ideas and
> opinions, though, are all mine.
