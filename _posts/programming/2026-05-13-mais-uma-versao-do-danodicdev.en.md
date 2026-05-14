---
layout: post
title: "Yet Another Version of danodic.dev"
lang: en
permalink: /2026/05/13/mais-uma-versao-do-danodicdev/
tags: [programming, ia]
---

So here we are, yet another version of this site. Every time I put together a
new version it's simpler than the last one — pretty soon I'll just link a .txt
file and call it a website. Look, that honestly _doesn't sound like a bad idea_.

Keeping with tradition, here's the post's song:

<p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Vm8JVt2ugEI?si=CqVk1pgnau6QwhRt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>

Don't judge me, just listen.

## Why a new version?

The first version of danodic.dev, which I wrote in 2022, had a purpose that went
beyond being a personal site — above all it was meant to be a learning platform.
It was unnecessarily complex, because I wanted to study programming things while
building the site. At the time I learned quite a bit, picked up some cool stuff,
and then got completely sick of it.

That site, simple as it may have looked, had:

- A backend container.
- A frontend container.
- A database.
- The frontend had all kinds of crazy logic for parsing markdown, etc.
- Hosted on GCP $$$.

That's kind of way too much just to post garbage on the internet.

## Changing the approach

It was too annoying to maintain once you'd already learned what you wanted to
learn — what you're left with is just a boring site to keep up. Look, these
personal projects are things I do _after_ already working all day. They're
supposed to be a hobby, and nine times out of ten I don't want a hobby that
feels exactly like what I was doing at work all day.

I decided to change the approach, and this new approach was actually similar to
the current one. I decided to strip out all the logic and generate a static site
using __mkdocs__. At the time I was kind of fixated on the idea of Digital
Gardens, deep in Obsidian vaults up to my neck, and wanted something that felt
like Obsidian Publish. I even published a plugin to add backlinks to mkdocs that
got a bit of traction.

> I did make a version using Obsidian Publish, but I didn't like the service and
> abandoned it quickly, so I won't even get into that here.

Static site generation worked fine, but creating themes and all that is a bit of
a pain. Either you stick with a default mkdocs theme or you spend an unbelievable
amount of time fiddling with HTML, CSS, and JavaScript (yuck).

In the end I did publish a version but set it aside pretty quickly.

## Limbo

After a while I ended up letting the site sit in limbo. A lot changed in my life,
I didn't have time to write anything relevant and wasn't doing anything I felt
was worth sharing. I started a [YouTube channel](https://www.youtube.com/@perguicinha)
to kill time doing something other than programming or writing about programming.

And that was it for the last... two years? I think that's about right, roughly
two years.

## New Version

In the end, life stabilized and I went back to my natural state of programming
in my free time. A lot has changed in the last two years, and with the arrival
of these code assistants I saw an opportunity to sort out the site without having
to spend a lot of time on technical stuff.

I ended up deciding to go with the simplest setup I could manage and focus on
the content. I went with GitHub Pages using Jekyll, and had Cláudio handle the
whole project setup.

I did spend a few days tweaking the site's appearance, but they were short
sessions (no more than an hour each) making adjustments. I already had the assets
like the site logo and an idea of how I wanted the layout to look, so it was
reasonably straightforward.

## AI Usage

As I mentioned, I used Cláudio to solve this problem. The main reasons for using
AI for this are:

- Spend less time on it.
- Jekyll is written in Ruby, which is not a language I work with and I'm not
  particularly interested in learning right now.
- I still wanted a less generic look, so I was going to have to get my hands
  dirty with HTML and CSS.

Using AI for the setup also helped me get a few other things I wanted, like
Portuguese, English, and Spanish versions of all posts.

> To be clear, I use AI to __translate__ the posts, not to write them. At least
> one version of each will have been written manually by me, with no code
> assistants. In this case, that's the Portuguese version.

## Efficiency

With AI I managed to get this done in three days, including the initial post,
migrating the old posts, and translating them.

I'm reasonably happy with the current approach. For me the most important thing
about this blog is being able to write content in Markdown in a code editor or
in Obsidian. I didn't want to use a web interface or anything like that — which
is why I never had any desire to use Medium or similar. On top of that, I like
owning my own stuff, and a git repository lets me do that.

## And why now?

If the original site were still up, I'd be going back to post there now. I've
been getting back into doing things with programming and studying a lot of new
stuff, mainly in this AI world. This is not going to turn into an AI blog
(I think), but using AI has let me make better use of my free time and do things
that I used to take way too long to get done (and usually gave up on halfway
through).

I think I've been doing things interesting enough to go back to sharing what I'm
up to. And the new site setup should make things easier to maintain, which should
keep me coming back to post.

## Conclusion

- We have a new site.
- I think I'm going to post here.
- If I don't post, at least I didn't waste much time setting this up.
- I am not a vibe-coder (I swear).
- But yes, this site was vibe-coded. :)
