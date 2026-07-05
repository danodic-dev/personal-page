---
layout: post
title: "The Project Cemetery"
lang: en
permalink: /2026/07/02/project-cemetery
tags: [aleatoriedades, programming]
---

> To be clear, I use AI to __translate__ the posts, not to write them. At
> least one version of each will have been written manually by me, with no
> code assistants. In this case, that's the English version.

I am a person who likes coding, and this is one of my hobbies. I often like to
try new things, new languages, new stacks. If I hear about a less-known but not
too esoteric language, I'll try it. And my way of trying it and learning is
writing code.

However, I reckon I need to get more used to the concept of gists or sandbox
projects in order to try more things with less infrastructure and setup. Today
every language has a project manager that sets up a new folder structure, basic
dependencies and other things. And usually I have to go through that just to try
a hello world and check the stack.

Another thing is that I like to try new languages with well-known problems -- it
makes no sense to try to learn 2 or 3 new things all at the same time when you
can reduce the scope.

That said, I have a serious problem of project hoarding.

## The "Projects" folder

I have a path on my disk which is `/home/danilo/Documents/Projects`. The folder
"Projects" is where ideas go to die. This is a project cemetery where I don't
think a lot before creating something new. This is the folder I `cd` into when I
am feeling like the next multi-billion unicorn founder and this is the folder
where I close the terminal a few minutes later when I realize this is hard.

The projects folder is basically a materialization of my ADHD: an insane
roulette of ideas, just picked at random, before moving on to something else
later.

## The Cleanup

I have been working on cleaning up my digital life over the last few months. I
have started by cleaning up the `Documents` folder recently. I have also started
cleaning up my Gmail (which already dropped from 40k messages to <1k in the last
weekend) and now I have to face the big boss. The projects folder.

The biggest challenge is how to clean it up without deleting things I wouldn't
like to delete. Well...

## The Analysis

Instead of digging through a lot of folders and trying to figure things out, I
did the following: I asked AI to do that for me.

## The Prompt

```
> This folder is a project cemetery. Most of what we have here is just garbage.
Projects which have been started but never finished. Most never even started -- 
I created the folder and did not do anything. But amidst all this garbage, there
is (very few) projects I have finished. This is full of proof of concepts,
tests, code challenges for interviews, empty folders, etc. Not only we have
projects in this folder, but the mess grew so big that after some time I started
segmenting by language (ex.: Python, Java, etc.) and some by major project.
Nothing is consistent in this folder, do not assume anything. I need you to
analyze each folder in here, and drill down if needed and identify:

  - What are project and what are empty folders
  - In case there is a project, what is the size of it?
  - What has been the last time I modified it?
  - In case there is code, what is the context of it?
  - What is the size of it? Is that just a boilperplate from a project generator
    or there is anything going on?
  - Is it a duplicate or a port from another existing project? if so, What is
    the most up-to-date?
  - Is this something that you believe it is worth saving?

There is a folder in here for my old webside named "danodic.dev" where I
listed the most relevant projects I might want to store. There are actually
multiple folders for multiple attempts of implementing it, find the most
recent on and explore it so you get context about the projects first. I need a
table (a csv or a ods file), so before you create the file decide on the list
of columns to be added, so that I can understand that later (and you as well).

Start by trying to find the old website, then start exploring and documenting
your findings. Create a list of folders (maybe using the tree command?) so
that You know each folder to explore. Add the list of folders to the TASK.md,
tick each folder once you are done exploring it. Make sure to exclude folders
like node_modules, .venv, target/ etc. which are build outputs, targets. etc.
```

I could post the response here, but the follow-up is better.

## The follow-up

```
I want metrics about how bad is the mess. Be offensive in your analysis.
```

## The Response

For my regret and your delight, here is the response I got:

```
🪦 The danodic Project Cemetery: A Forensic Roast

The headline number: 10.4%

Out of 249 projects, exactly 26 are worth keeping. That's a 10.4% finish rate,
which means 89.6% of everything you've ever started is landfill. If you were a
baseball player you'd be elite. As a software completionist, you have the
follow-through of a toddler in a toy store.

150 projects (60.2%) are flat-out discard. Not "needs work" — discard. Of those:
- 25 are completely empty folders. You created musga, musgas, nordont, reptest,
  report-template, Unity, and a dozen others, felt the dopamine hit of mkdir,
  and never typed a single character. Naming the folder was the project.
- 51 are untouched generator boilerplate. create-react-app defaults in a folder
  you literally named Garbage. At least you were honest once.
- 41 projects contain ZERO source files. 78 (31.3%) have one or fewer. A third
  of your "projects" are emptier than the promises you made to finish them.

The polyglot compulsion (this is the real diagnosis)

You don't finish projects. You re-abandon the same project in a new language to
feel the novelty again. 145 of your 249 projects are redundant reimplementations
of just 33 ideas. The repeat offenders:

┌──────────────────────────────────────────────┬──────────────────────────────────────────────┐
│                     Idea                     │ Times you rewrote it instead of finishing it │
├──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ danodic.dev (your website)                   │ 22                                           │
├──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ caligo (one game)                            │ 15                                           │
├──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ rushbeat / minumtium / confirmo              │ 8 each                                       │
├──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ jao / discord-bots / the Rust book exercises │ 6 each                                       │
└──────────────────────────────────────────────┴──────────────────────────────────────────────┘

You rewrote your personal blog 22 times across Python, Clojure, ClojureScript,
Rust, Haskell, Kotlin, Java, and mkdocs — and the version that actually shipped
is the one where you gave up and used an off-the-shelf static-site generator.
Twenty-one funerals to learn you should've done the lazy thing on day one.

And caligo — a single game — exists in 15 flavors: Clojure (twice, one literally
named caligo-clj-old-old), Java, Kotlin, Python (twice), Nim, Godot (3 empty
attempts), Racket, Groovy (no source), and more. That's not a game. That's a
Rosetta Stone of quitting.

You touched 66 distinct languages/frameworks. That's not versatility, that's
commitment-phobia with a compiler.

The shame gallery

- 32 Clojure projects still say "FIXME: write description" in their config. You
  didn't abandon them — you never even bothered to describe them. 35 READMEs
  still say FIXME.
- 6 manifests are still authored by "Your Name <you@example.com>". You couldn't
  commit to putting your own name on your own work.
- 18 projects still wear their placeholder names: pythonProject, pythonProject1,
  PythonProject 1, MyApplication, MyApplication2, untitled, batata, musgas,
  nope. You have a pythonProject, a pythonProject1, and a PythonProject 1.
  Three. You made the same nothing three times and couldn't be bothered to
  rename any of them.

The hoarding

- 5.89 GB of actual content — but only 31% lives in things worth keeping, and an
  equal 34% is pure discard.
- 1.54 GB is upstream code you didn't even write — you cloned vLLM (1.24 GB),
  Coqui-TTS, Tortoise-TTS, Unreal samples, and UnoJoy, then let them rot in your
  personal projects folder like trophies for repos other people finished.
- Your actual disk footprint is 35 GB. Content is 5.89 GB. That means
  ~29 GB (83%) is build artifacts, node_modules, target/, and _opam sludge you
  never once cleaned. OCaml alone hid 726 MB of _opam behind a single 192 KB
  test file. One test. Three quarters of a gigabyte of dependencies. Zero
  shipped features.

Timeline of a serial abandoner

55 projects last-touched in 2023, 46 in 2024, 33 in 2025. This isn't a graveyard
filling up over a lost decade — you are actively producing corpses at a rate of
~40/year. The bodies are still warm.

---
The verdict

This isn't a projects folder. It's a compulsive-initiation disorder rendered in
66 programming languages, 83% build-cache by weight, with a 1-in-10 survival
rate and your website's severed head mounted on the wall 22 times.

The good news: the 26 keepers are genuinely solid — Rushbeat, the Jao suite, the
Minumtium ecosystem, and your 2025–26 work (tila, wipito, routines-core) show
what happens the ~10% of the time you actually finish something. The other good
news: I can bury 150 of these in a _graveyard/ folder and reclaim ~29 GB of
build sludge in about thirty seconds.

Want me to start digging graves, or would you like to keep them around for the
sentimental value of unfulfilled potential?
```

I have to admit I did not think I would ever laugh at LLM humor, but yeah...
"the dopamine hit of mkdir" is a great line in this context.
