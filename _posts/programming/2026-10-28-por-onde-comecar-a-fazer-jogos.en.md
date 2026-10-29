---
layout: post
title: "Where to Start Making Games"
lang: en
permalink: /2026/10/28/por-onde-comecar-a-fazer-jogos/
tags: [gamedev, programming]
---

> To be clear, I usually only use AI to __translate__ the posts, not to write
> them. This one is an exception: I dictated the text, ran it through STT and
> used an LLM to organize and write the post based on what I said. The ideas
> and opinions are mine; the wording, not so much.

A friend asked me how to get started in game development: what to study, which
tool to use, where to go from there. Instead of answering with a huge message
that would get lost in the middle of the chat, I decided to write down my take
on the subject here.

Keeping with tradition, here's the post's song:

<p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Djka3ieMJhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>

Yeah. The day has come when I genuinely liked something by Skrillex. It
happens.

> Before anything else, a disclaimer: I'm not a professional game developer. I've
> never released anything commercially. But I've made a few games over the years,
> and I learned a few things along the way -- usually the hard way.

## The prototype graveyard

The first thing I learned is that, out of all the demos, tests and projects
you're going to start, _one_ will become a game. The rest will die forgotten in
some random folder. I've actually already written about
[my project graveyard](/2026/07/02/project-cemetery), and it isn't pretty.

But the few projects that survived have a few things in common, and the main one
is that there was a _solid idea_ behind them. And what do I mean by a solid
idea? That I knew which mechanics I wanted to implement, that I had a clear
understanding of what made that game fun, and that I had a sense -- even a
rough one -- of the technology needed to make it.

And I have to admit: 90% of the time, it isn't technical knowledge that moves
you forward. It's having the idea for the game really well defined in your head.

## Start with the idea

I'll use two of my own projects as examples, because I think they're the ones
that had reasonable success.

The first is **Rushbeat**, a music game based on
[_Beatmania IIDX_](https://en.wikipedia.org/wiki/Beatmania_IIDX). The
second is **Rushflag**, a flag-guessing game that runs as a YouTube livestream
and interacts with the chat. I have other projects I never even got around to
showing, but these two work well to explain the reasoning.

### Rushbeat

> <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/iVOMaDSx6Us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
>
> _Rushbeat._

Rushbeat's gameplay goal is to create that addictive loop that hooks the
player, pulls them into hyperfocus and makes them want to play _just one more
time_. That loop comes from the relationship between the music and the reflex
of hitting the keys: as the player gets better, the music starts playing the way
it's supposed to. They're the one playing the song. And that's extremely
satisfying.

Over time, the player can take on harder songs and play longer stretches
without missing, which brings a sense of reward. At the end of the round they
get a judgment telling them how well they did, and that becomes a way to measure
their own performance and chase better scores.

It's a very simple mechanism, one that basically every music game explores.
None of it was invented for Rushbeat -- it's a clone of a game that already
exists and follows exactly the same concepts.

But what keeps the player hooked isn't just the gameplay loop: it's the ability
to add new content. The game was designed to accept custom songs and even to
customize how it looks. It's these smaller details that make the experience
more complete.

Rushbeat was made to run on the computer and was never meant to be released in
any store, partly because of copyright issues. But it was a _fun project to
make_, and that's a really important detail: the project needs to be fun for
you too. If developing that game isn't fun, especially as a hobby project, maybe
it doesn't make much sense. I'll come back to this later.

### Rushflag

Rushflag was born late one night when YouTube got its hooks in me. I was in the
middle of a _doom scrolling_ session and stumbled onto one of those livestreams
with little flags inside a circle, bumping into each other, while the chat bets
on which one is going to win. I spent a good ten minutes staring at it,
completely losing track of time.

But it stuck in my head. The game was really crude, really simple, and I
thought: _what if we made something with a similar mechanic, but much more
polished, something that actually looks like a game?_ Luckily I already had
experience from what I did on Rushbeat and other projects, so I more or less
know how to make something visually interesting. And these days, with AI, that
goes even faster.

I combined that with a channel that kept showing up in my feed,
_YourTutorBrad_, which has a few recurring characters. One of the ones I enjoy
watching the most is Isaac, who's the master of guessing flags. There's even a
little kid, around six or seven years old, who memorized all of them too. And I
thought: _what if anyone in the chat could live that experience? What if one day
Isaac himself showed up in the chat to play?_

I could have made a mobile app, but I thought it was more interesting to just
leave the game running on YouTube: someone stumbles onto the video, jumps in and
plays. Another thing that weighed in was monetization. This is a game I made
already thinking about, if possible, monetizing it in the future, and YouTube is
a platform that works for that.

> <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FVqtmvXJoTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
>
> _Rushflag running live. Jump in and guess a flag in the chat._

### The three questions

Looking at these two ideas, you can pull out three things I consider important
before starting any game seriously:

1. **What's the core mechanic?** Hitting the keys in rhythm to play the song;
   guessing the flag through the chat.
2. **What's the reward mechanism?** In Rushbeat, it's getting good, playing the
   song without mistakes and getting a good rating. In Rushflag, it's guessing
   the flag before the other players, seeing your own name on screen and
   climbing the leaderboard.
3. **What's the format?** Rushbeat is a desktop game. Rushflag is an
   application that streams to YouTube.

## Start with what you don't know

In every project I start, I follow the same process: _I tackle first whatever I
don't know how to do_.

If you're someone who knows design, leave the graphics for last and start by
thinking about how you're going to do the programming. Once you get past the
part you don't know how to do, doing what you do know is quick.

In Rushflag, for example, the last thing I did was the music. Music I know how
to make. Streaming the video to YouTube, on the other hand, was something I had
never done, and that's where I attacked first.

Doing what we don't know is always going to be the hardest part of a project,
_even if it's the simplest part of it_. Rushflag's code isn't complex; the
graphics and the music are way more work. But part of the graphics was
uncertain to me, and the other uncertainty was how to get the video to YouTube.

About the graphics: I needed more than 200 flags drawn, and drawn _in layers_. I
wasn't going to do that by hand. So I had to figure out how to automate the
process. Can you do that with AI today? You can, but I had to iterate through a
few different ones. [Gemini](https://gemini.google.com) wasn't generating the
flags properly. With [Claude](https://claude.ai) I tried a few different
approaches, until I concluded that generating the flags through
[Blender](https://www.blender.org) worked well. From there I built a pipeline, a
workflow to solve that problem.

Then came the streaming. I went and studied, figured out how it worked (with AI,
obviously) and solved it. From that point on, the rest was really quick:
graphics, screens, interface, all things I already have experience with.

Rushbeat is an even better example, because it was much harder -- partly
because, when I started, around 2017, there was no AI to help. The first thing
I did was a prototype that only played the songs. For me, that was the most
uncertain part: how the file format worked, how to load it, how to get playback
just right. The first versions of Rushbeat had no graphics at all, it was just
a player playing music.

> <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/p9412C9s5No" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
>
> _The Python prototype, the first time it played a song and showed the notes._

Over time that evolved, became a graphical application with a rudimentary
interface, and the game grew from there.

### The prototype doesn't have to be the final game

And that's a really important detail: a lot of the time the first version of
the game won't even be made in the final tool, or in the final codebase.

Rushbeat was prototyped in Python. Not because it was the best language for it
-- I knew it wasn't going to stay in Python -- but because it was the language I
could program and iterate in the fastest. When it got to the point where Python
was no longer a good idea, I went to explore alternatives. I spent some time in
Unity, learned things, solved other challenges, and in the end decided to stick
with Java.

### Fail fast

This approach tends to work because it gets the hardest thing out of the way
right off the bat. If you know there's a really big challenge in the project,
it's better to face it first than to spend months making graphics, music and a
bunch of stuff around it, only to end up not using any of it because you gave
up when you got to the hard part.

It's the famous _fail fast_: if it isn't going to work, you find out quickly,
give up once and for all and move on to the next idea.

## Choosing your tools

These days, the game development tool ecosystem is a gigantic mess. There are
countless engines, countless tools, each one wanting your attention and wanting
you to work in a different way. A lot of it is free, with different uses and
approaches. So choosing is hard.

What I'd tell someone starting out is: _go mainstream_. Use the best-known
tools, because the result will probably be better.

### Don't build your own engine

It's really cool when you hear about that guy who programmed his own game engine
from scratch, with physics, collision and everything. Would I like to be that
guy? I would. I've done it, actually. But the truth is it comes at a price, and
the price is steep: it slows development down a lot.

And there's a more important point. When technical issues start getting in your
way, it gets harder and harder to translate what's in your head into what's on
the screen. Games are creative work, just like design, 3D modeling or music,
and every creative process benefits from _timing_ and hyperfocus. The faster the
path between the idea and the screen, the better. Otherwise, you end up
forgetting what you were doing halfway through.

That doesn't mean the tool you pick will be the definitive one. In a real
project, you might switch tools two or three times. It happens, because there's
a lot to take into account.

### What determines the engine

Before recommending anything, you need to understand the scope of the game.

**Platform:** is it a game to run in the browser? On desktop? Do you plan to
release on console someday? Some tools, like Unity and Defold, have official
console support (as long as you're approved by the manufacturer); others, like
Godot, [rely on third-party companies](https://godotengine.org/consoles/) to do
the port. For someone just starting out, this barely matters.

**2D or 3D:** if the game is 2D, you can use simpler engines, like
[GameMaker](https://gamemaker.io) (which is now free for non-commercial use) or
[Construct](https://www.construct.net). Both let you program without writing
code -- GameMaker with visual blocks and Construct with event sheets --, so for
someone who just wants to make a game and doesn't necessarily want to learn to
program, they're much simpler. Unity and Godot also make 2D games and work well
for high-resolution 2D, but pixel-perfect pixel art takes some work. Godot even
has
[options for that](https://docs.godotengine.org/en/stable/tutorials/rendering/multiple_resolutions.html),
but in Unity, as I'll tell you later, I suffered.

For 3D, the options get narrower. [Unreal](https://www.unrealengine.com) is
powerful, but I wouldn't recommend it for beginners: projects get heavy and
sluggish really easily. [Unity](https://unity.com) is also an option, but I
wouldn't go with it because of legal certainty. If your game takes off on Unity,
you're at the mercy of a company with a really bad licensing track record --
it's worth reading up on the
[2023 _runtime fee_](https://en.wikipedia.org/wiki/Unity_Technologies), which
caused widespread outrage until it was canceled.

The alternative I recommend is **[Godot](https://godotengine.org)**: free, open
source and, above all, with a license that gives you peace of mind. Today it's
already an established engine, with plenty of documentation and tutorials
available.

I also really like **[Defold](https://defold.com)**, which I think is very
underrated. It's mainly focused on 2D, but it also supports 3D. And if you want
something closer to Unity, but free and open source, it's worth checking out
**[Stride](https://www.stride3d.net)**, which even uses C# for programming.

### Assets

Whether 2D or 3D, you're going to need an asset production pipeline. An asset is
any resource in the game: a sprite, an image, a 3D model, a song. You need to
know which tools you'll use, what process you'll follow, whether you'll make
them yourself or bring someone else in. And even for basic development, you'll
need at least placeholder graphics and sounds until you have the final
versions.

Some tools I recommend:

- **2D graphics and interfaces:** on Windows and Mac,
  [Affinity](https://www.affinity.studio) is the best free tool out there --
  since late 2025, when Canva made it free. It isn't open source or free
  software, but it's the best. On Linux, as a rule, we still get by with
  [Inkscape](https://inkscape.org) and [GIMP](https://www.gimp.org).
- **Sprites:** for more detailed work, [Aseprite](https://www.aseprite.org) is
  really good. It's paid, but cheap, and the source code is available for anyone
  who wants to compile it.
- **3D:** [Blender](https://www.blender.org) is pretty much a _no-brainer_. The
  industry standards today are [Maya](https://www.autodesk.com/products/maya),
  [Houdini](https://www.sidefx.com) and Blender, and Blender is free and open
  source. Unless you're very specialized in modeling, it's probably the ideal
  tool.
- **Music:** that's a whole other world. I like
  [FL Studio](https://www.image-line.com/fl-studio/), but there's
  [Renoise](https://www.renoise.com), [Ableton](https://www.ableton.com) and
  many others -- I talked more about this in the post on
  [music on Linux](/2026/07/05/musica-no-linux/).

But what I really recommend is starting with very simple placeholders. If it's
3D, use cubes, spheres and rectangles to represent things while you prototype,
and think about graphics later. If it's 2D, make really rough graphics and don't
worry about polish yet.

If you can reuse ready-made assets, go for it. Unity has an
[asset store](https://assetstore.unity.com), and sites like
[Kenney](https://kenney.nl) have a ton of free assets, including 3D, that you
can use for prototyping. I'd start with ready-made assets and only later think
about creating my own or bringing someone in to make them. Keep in mind that
your own assets give the game personality, something reused ones don't.

For music, I'd recommend using licensed or free music -- unless you're a
musician and want to put an emphasis on it.

And here's an important reminder: even the simplest game will take years if you
decide to do everything yourself. That was the case with Rushbeat. I did
absolutely everything on it, and spent five years making a game that, with a
smaller scope, would have taken one.

## Scope

And that brings me to the biggest problem with personal projects, especially
games: [_scope creep_](https://en.wikipedia.org/wiki/Scope_creep). You keep
going, keep having ideas, keep adding more stuff. Every new thing increases the
work, and every time the work increases, the finish line gets further away.
Until you never finish.

Games are especially vulnerable to this because scope grows organically. You
can define a core mechanic really fast, but you soon realize that, for that
mechanic to be fun, it needs a lot of content around it: lots of levels, lots of
enemies, lots of stuff. And the project keeps swelling.

A few things that help:

- **Plan before you start.** Make a list of everything the game needs to have
  and do, and check things off as you go. That checklist will be your guide for
  knowing when to stop.
- **Aim for a demo, not a full game.** Release an early version, see if the
  feedback is good, and only then work on the full version.
- **Watch out for side projects.** Starting a bunch of projects at the same time
  doesn't help at all.

And remember: _games aren't finished, they're abandoned_. You'll keep finding
bugs and little things to tweak forever. At some point you need to let go and
call it done.

## What's your goal?

Part of choosing your tools has to be guided by _which skill you want to
develop_.

If your intention isn't to release a game, but to learn to program, obviously
it makes no sense to pick an engine where you don't write code. But I also
wouldn't recommend starting from scratch with a library that's 100% code.
Rushbeat and Rushflag weren't made in Unity or Godot or anything like that:
Rushflag uses OpenGL directly, and Rushbeat was made in Java with
[libGDX](https://libgdx.com), which is a library and not a full engine -- I
built the engine myself. Even for someone who wants to learn to program, I'd
recommend picking an engine and writing scripts inside it.

And here the recommendation goes back to Defold. It uses
[Lua](https://www.lua.org/about.html), a Brazilian language created at PUC-Rio,
very simple and friendly for beginners. Defold has no visual scripting: all the
game logic [is written in Lua](https://defold.com/manuals/writing-code/). But
the editor handles a lot of things visually -- scenes, UI, sprite atlases,
tilemaps, particles --, so the code stays focused on the game's behavior. It's a
much gentler introduction to programming than trying to make a game from scratch
in code.

Today you can program with AI, of course, but AI can't see what's happening on
the screen. Knowing your way around the code will help you make adjustments and
optimize things when it gets it wrong.

If your goal is to learn graphics, 3D modeling and the like, use Godot or Defold
and let AI handle the code. Your focus isn't programming, so that's fine.

And if your goal is to learn to make music... don't make a game. Go make music.

## What I wouldn't do on a first game

### Start with a big project

Start small, preferably with a clone of an existing game: Tetris, Pac-Man,
Snake. That knowledge adds up.

A big project isn't just a technical matter -- it's a matter of discipline, of
persistence. When the project gets hard to execute, you start procrastinating.
The more technical background you have before taking on something big, the
better, because then the only thing that can make you procrastinate is lack of
motivation, not not knowing how to do it.

That happened to me with Rushbeat. I went six months without touching the game
because I needed to implement a really complex part -- if I remember right,
changing the BPM in the middle of a song. For my skills at the time, it was a
really annoying thing to do, and I simply ran away from it for half a year.

### Underestimate the scope

A lot of people tell me they want to make an RPG. Making a game with 40, 50
hours of gameplay is a Herculean task, even if it's a really simple RPG, even
using [RPG Maker](https://www.rpgmakerweb.com). The story alone is already
complex, long and a huge amount of work.

I'd start with games with no story, or with a simple, more cliché story, that
focus on mechanics and gameplay. Once you've got the technical side down, then
it's worth spending time writing. Writing stories for games is a whole
discipline in itself, which also needs to be studied.

### Start with 3D

Start with 2D. Once you understand well how things work in two dimensions,
moving to 3D is much easier -- at the end of the day, it's just one more axis.

### Start with the final art

Don't make your own assets right off the bat, or, if you do, keep them
temporary. Use assets available online, like Kenney's, some asset generator, or
have an AI generate them. You can sketch your concepts and ideas, but don't
start with the final art.

### Start with your dream game

This is the most important advice of all. Our dream game will always have an
incredibly high bar for quality and expectations, and we'll never finish it --
at least not until we know how to make games efficiently.

Start with a simple game, without so much love, without so much passion
involved. The dream game can wait.

## What I used, and what I thought

To wrap up, a bit about the technologies I used in my games and what worked and
what didn't.

### Rushbeat

Rushbeat started in **Python**, a language known for not having performance
that's very suited to games. Today, with the experience I have, I know that game
could have been made in Python and it would work. But back then I wasn't that
good a programmer, I ended up running into performance limitations and decided
to switch.

Even so, Python wasn't a bad choice. It wasn't the ideal language for the game,
but it was great for the prototype. And for someone who already programs,
languages are all kind of similar, so switching from one to another usually
isn't that hard.

Then I moved to **Unity**, and that was _not_ a good choice. The game is 2D and
I wanted pixel precision on screen, and Unity doesn't handle that well. There's
even an old script on my GitHub that I wrote just to snap things to pixels. It
was hack on top of hack.

> <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HaKcW__Akj4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
>
> _The last recording of Rushbeat in Unity._

But that's not even what made me leave Unity, because it was working. It was the
fear of being locked into a proprietary engine and, out of nowhere, them
deciding to change the license and me being held hostage by a tool with weird
terms. A few months later, that's exactly what happened. Good thing I left
before.

So I moved to **Java with libGDX**. Java is a language I already knew well --
unlike C#, which is what Unity uses -- and development took off. And more: it
fulfilled one of the goals I had with Rushbeat, which was to become a better
programmer. I rewrote the game about four times: in Python, in C# in Unity, in
Java, and again in Java when I went to study design patterns and more specific
programming stuff. I don't regret it, it served its purpose.

For the graphics I used Affinity (back then, with a paid license), and for the
music FL Studio -- both for the game's test songs and for the menu music. I also
built the animation system myself, in Java with libGDX, so I could create the
game's animations and skins.

### Rushflag

With Rushflag the story is different. It isn't my dream project, it isn't
something I'm passionate about. So the first decision was that it would be
_vibe coded_ with AI. No fear, no remorse and no hiding it from anyone. The idea
was precisely to develop fast and get the game live soon.

The main tool for the coding was Claude. The stack ended up like this:

- **Backend:** Java with [Spring](https://spring.io)
- **Frontend:** Python with [OpenGL](https://www.opengl.org) and
  [GStreamer](https://gstreamer.freedesktop.org) (I think there's
  [Pillow](https://python-pillow.github.io) under the hood, but, honestly, I
  don't care much -- it's vibe coded anyway)
- **Database:** [Postgres](https://www.postgresql.org)

In the pipeline, Claude was used together with Blender to generate the flags,
and [Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs)
to design the interface. And no, I didn't accept whatever it spat out: it took a
lot of iterations until the interface looked the way I wanted.

The only thing I insisted on doing by hand was, funnily enough, the music. I
used Renoise and did it all myself.

## So, where to start?

For my friend who asked for advice, my recommendation is: grab **Defold with
Lua**, or **Godot with
[GDScript](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html)**
(its own language, similar to Python). Download some temporary assets from
Kenney, or draw whatever, and make a few test projects.

If you want to learn to program, study Lua or GDScript. If you're not interested
in programming and just want to have fun making games, both work -- just know
that, in both, the game logic is going to be code no matter what. But both keep
scripts on disk as text, and you can put Claude, [Codex](https://openai.com/codex/)
or any other tool to write the code.

At the end of the day, what matters most isn't technical skill. It's how the
game is structured, whether your idea is good and, above all, whether the game
is _fun_. It has to be fun at least for you to play. If you find it fun, that's
already great.

So start with a prototype. Plug the controller into the computer, test it and
see if it's fun. If it isn't, don't go past the prototype: rethink the idea and
keep tweaking the mechanics until it's fun. Because, at the end of the day, we
play games to have fun.

Take care, and see you next time.
