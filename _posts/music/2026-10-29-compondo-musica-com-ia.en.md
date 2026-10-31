---
layout: post
title: "Composing Music with AI"
lang: en
permalink: /2026/10/29/compondo-musica-com-ia/
tags: [music, music-production, ia]
---

> This post was written from an audio recording that I transcribed using
> [Buzz](https://github.com/chidiwilliams/buzz), a speech-to-text (STT) tool.
> Like any automatic transcription, the raw output comes full of repetitions,
> hesitations, and misheard words, so I used an LLM to organize that material
> into flowing text and clean up those rough edges — which explains why some
> parts might sound a bit too "AI" in places. The ideas and opinions, though,
> are all mine.

Over the last few days I've been doing something I never thought I'd do: making
music with artificial intelligence. Before anyone starts throwing rocks, I want
to explain the context -- because, as a rule, _it's not something I'd do_.

Keeping with tradition, here's the post's song:

<p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jcTRQnLRPnQ?start=529" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>

## Why I normally wouldn't do this

When I want to give a project some personality, put my own touch on it, music is
something I prefer to make myself.

Graphics I'm perfectly fine letting AI handle. The visual direction is usually
mine, but design is something I'm very rusty at -- and, to be honest, I was
never very good at it, and it hasn't been much fun for me lately. I like
programming, but I give it up without much drama when I need to ship something
faster.

Music is a different story. Making music, for me, is relaxing. It's a hobby
_with no strings attached_: if no music comes out at the end of the day, that's
fine. Opening up an instrument and just tapping around, making noise, already
makes the time fly and makes me happy.

Besides, I think music brings character to a project, and I don't like the idea
of making something where absolutely nothing is handmade. Mind you, I'm not
saying my music would be better than music made by AI. I'm saying that, good or
bad, I'd rather make it myself, because what I care about is the process.

That's a premise of my projects. But you also need to know when to pick these
battles, and how much this purism is actually going to buy you.

## The problem

I'm working on a project that needs an entire soundtrack: dozens of tracks,
cohesive with each other, covering very different situations. I'm not
particularly inspired at the moment, I don't feel like composing all of that
from scratch, and I need it done fast.

So I decided to try it with AI. But not the way you're imagining.

## Process first, tools second

Before diving into anything, I like to think about the pipeline. If the
creative process is consistent, it scales: it becomes elastic, and I can
generate more stuff procedurally without losing coherence.

So what makes up a piece of music? It needs _rhythm_, of some kind. It needs a
_mood_ -- it can be happy, sad, nostalgic, tense, scary. And that mood rests on
two things: the [_timbres_](https://pt.wikipedia.org/wiki/Timbre), that is,
which sounds are going to be used, and the
[_scale_](https://pt.wikipedia.org/wiki/Escala_(m%C3%BAsica)) and the _tonic_.
If you organize that rationally, you can get to a consistent process.

### The moods

The first step with the language model was to list every mood the soundtrack
needed. It had to go from a happy moment to a nostalgic, sad, tense, or scary
one, and it had to be reasonably obvious what each track was trying to convey.

### The style

In this project, music isn't the focus. It's there to create atmosphere, build
tension, and go along with the story being told. So the solution was to make
[_ambient music_](https://pt.wikipedia.org/wiki/M%C3%BAsica_ambiente).

Ambient music has few percussive elements, and that helped a lot. I already
figured nothing good would come out if I asked the AI to work with samples: AI
has no ears. It can't look at a sample's waveform and really understand what
sound that is. The way to go was
[_synthesis_](https://pt.wikipedia.org/wiki/S%C3%ADntese_sonora).

And ambient music with synthesizers works really well. It's one of the easiest
styles to make: you need to get the chords and scales right, but the
arrangement is simple, and the timbres are also simple to synthesize.

### The plan

With the style and moods defined, I worked with the AI to pick the scales and
keys for each case. That became the construction plan for the soundtrack.

This worked well because I could chime in right away: "that scale doesn't fit
this, use another one," or "search the internet for which scale is usually used
in this kind of situation." We kept working as a pair until we had a plan with
around 50 tracks.

At this stage I also started setting the artistic direction. Things like: use
[low-pass](https://pt.wikipedia.org/wiki/Filtro_passa-baixa) and
[high-pass](https://pt.wikipedia.org/wiki/Filtro_passa-alta) filters, use
[reverb](https://pt.wikipedia.org/wiki/Reverbera%C3%A7%C3%A3o) and
[delay](https://en.wikipedia.org/wiki/Delay_(audio_effect)), and whenever you
make a _pad_, add unison -- no raw synth sound, it sounds robotic. Lots of
reverb to blend everything and make the sound a bit hazy.

## The tooling

Composing, for a language model, is relatively easy. Music has a well-defined
structure, which is music theory: scale, notes, and time signature already
sketch out more or less what the track will be. But it's the tooling that
defines how it's going to _sound_.

I had two requirements. The first: it had to be free, preferably open source.
That already ruled out [FL Studio](https://www.image-line.com/) and
[Renoise](https://www.renoise.com/). There are other people on the project, and
I want them to be able to generate and tweak the soundtrack too.

The second: it had to be possible to make the agent _program_ the music. And
there's no shortage of options for that: [Strudel](https://strudel.cc/),
[Orca](https://hundredrabbits.itch.io/orca),
[Sonic Pi](https://sonic-pi.net/) (the one that uses Ruby), among others. I even
considered Renoise again -- it's the DAW I use, as I wrote about in
[Music on Linux](/2026/07/05/musica-no-linux/) -- because of its
[Lua scripting](https://www.renoise.com/tools), but besides being proprietary,
its file format isn't well documented.

My first choice ended up being
[SuperCollider](https://supercollider.github.io/).

## SuperCollider

SuperCollider is a programming language for controlling a sound engine that
works like a synthesizer. You can synthesize pretty much any sound, play the
music, and it supports extensions and effects. In other words: it's easy to get
the agent to create sounds programmatically and still predictably. For ambient
music, without much percussion, it seemed ideal.

And for sketching out the tracks it worked really well. The syntax is clean,
well known, and above all, well documented. And it renders _really_ fast -- in
[non-realtime mode](https://doc.sccode.org/Guides/Non-Realtime-Synthesis.html)
it doesn't need to play the music to generate the audio: in one afternoon I had
renders of the 40, 50 tracks in the plan.

The problem is that SuperCollider requires you to build your own sequencing
engine on top of it. The agent started doing very specific things, the scripts
got harder and harder to understand, and that's when things started going
south.

### Mixing

Some sounds ended up way louder than others. And mixing through an agent --
"turn this one down a bit, turn that one up" -- is awful. First because it's
slow. Second because, as anyone who has ever mixed a song knows, mixing is an
iterative process: you keep listening and adjusting, listening and adjusting.
Over chat, that doesn't work.

### Timing

At one point, when applying delay to an instrument, it treated the entire delay
tail as part of the note's duration, and only played the next note after the
delay was done. The notes drifted completely off time. When I complained, it
said it needed to "fix the engine" and wrote a ton of code. It eventually fixed
it, but, ugh: I don't want to have to explain that music needs to be on time
and that the time signature needs to be respected.

### Timbres

The default waveforms were way too raw. The sounds were shrill, hard to listen
to, all muddled together.

### Visualization

I had no easy way to see the music, understand what was going on, and edit
something if I wanted to.

## What it takes to automate something with AI

Before getting to the solution, a quick detour: what does it take to automate a
process with AI? In this case, making music. For me, it comes down to three
things.

The first is being able to _express the idea as text_. With music that's easy:
notes, tempos, time signatures, sheet music, and other notations.

The second is being able to _turn that text into actions inside a piece of
software_. In SuperCollider that's natural, because everything is a script: I
write a script and the script generates the music, without ever leaving text.
Another way is to understand a program's file format and generate that file
directly. AI is very good with text -- if the format is XML, it generates XML;
if it's code, it generates code.

The third is giving the AI _ways to evaluate what it generated_. That involves
criteria -- what's good, what's bad, what you expect from the output -- and
tools to measure that output. With SuperCollider, for example, I could ask it
to render each channel separately and analyze the decibels and peaks, to see if
any of them was much louder than the others.

### Knowing how to make music still matters

And here's the point I think matters most: at the end of the day, this isn't
about knowing how to use AI. It's also not about knowing how to operate a piece
of software or play an instrument. It's about _understanding music_.

The raw timbre problem only got solved because I gave explicit synthesis
instructions: for this kind of sound, use a sine wave, or a triangle; set the
[envelope](https://en.wikipedia.org/wiki/Envelope_(music)) -- attack, _decay_,
_release_ -- like this; add reverb, delay, unison.

I stopped being the software operator, but I kept telling it _how_ things had to
be done. That's what separates the result from random AI garbage.

## SunVox

So what ended up working best? Believe it or not, a piece of software I've known
for a long time and have played around with a lot, even on Android:
[SunVox](https://warmplace.ru/soft/sunvox/).

Not many people know it. It's made by Alexander Zolotov
([NightRadio](https://warmplace.ru/)), from Russia, who has a whole series of
really interesting audio software. SunVox is a modular studio: it has a
[_tracker_](https://en.wikipedia.org/wiki/Music_tracker) interface for
sequencing sounds, a timeline for arranging the music, and modules you drag
around and connect. It's lightweight and really cool -- but not exactly easy to
use.

Lucky for me, there's a Python library,
[Radiant Voices](https://github.com/metrasynth/radiant-voices), that generates
SunVox projects straight from code. And SunVox itself has a free library for
developers, which you can use from Python with
[sunvox-dll-python](https://github.com/metrasynth/sunvox-dll-python) to render
the music.

And SuperCollider didn't go in the trash: it's still used to synthesize the
sounds. With that, the pipeline looks like this:

1. The agent takes the plan for the track.
2. Synthesizes the instruments in SuperCollider and exports each one as a
   sample.
3. Writes a Python script that builds the SunVox project, loading those
   samples.
4. Runs the script, which generates the project and renders the track.
5. I open the project in SunVox and make whatever mixing adjustments I need.

> ![Code for one of the tracks](/assets/posts/musica/2/sunvox.png)
>
> _On the left, the pipeline's entry point; on the right, the definition of one
> of the tracks, in B Dorian at 84 bpm, with arpeggio, bass, pad, and melody
> layers._

The best of both worlds: SuperCollider does what it does best, which is
synthesizing sound, and SunVox takes care of sequencing, arrangement, and
mixing. And all on top of free software -- SunVox isn't open source, but it's
free on desktop, lightweight, and anyone can run it.

Because of the way music is arranged in SunVox, timing is always respected: no
notes drifting off time because someone applied an effect. I can also ask for
more specific things, like "take all the instruments of this type and create a
submix, so I can adjust the volume of all of them at once," or "add a
[compressor](https://pt.wikipedia.org/wiki/Compress%C3%A3o_de_alcance_din%C3%A2mico)
and a volume adjustment at the end of the chain, so the compressor glues the
tracks together."

In the end, this whole process -- defining the soundtrack, the moods, the
timbres -- became a reusable
[_skill_](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview).
Now I can create new soundtracks from it, with SuperCollider, SunVox, and the
agent.

## At the end of the day

I'm glad I didn't resort to something like [Suno](https://suno.com/). I don't
like that kind of tool; I find the output extremely generic. And I have zero
interest in making original music with AI.

But for a project like this one, where I need volume, a cohesive and consistent
soundtrack, a tight deadline, and no inspiration to compose everything from
scratch, it worked really well.

There's a lot of room for improvement, especially in the final output. I still
need to do a lot of mixing work, and there are tracks with blown-out low end
that I'll have to fix. But I liked the consistency of the project and the
result as a whole.

Some of the tracks that came out of this process are in this playlist:

> <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLWKExF6iZOqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
>
> _Tracks composed with SunVox._

And mind you: _composing_ music, not _generating_ music. I didn't use a model
that spat out a ready-made MP3. It was a process built together with the AI,
using it more as an assistant than as the main engine behind the whole thing.

That's it. Take care, and see you next time.
