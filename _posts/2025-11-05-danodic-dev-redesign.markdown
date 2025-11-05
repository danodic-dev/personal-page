---
layout: post
title: "Redesigning danodic.dev"
date: 2025-11-05
tags: [project, programming]
---

Rebuilt the site from scratch with Jekyll. The previous version was a SvelteKit app which was fine but felt like overkill for a blog that publishes maybe once a month. Static HTML is more honest.

## Why Jekyll

The criteria were simple:

- Write posts in Markdown
- No build-time JavaScript dependencies
- Deploy with `rsync`
- Fast

Jekyll ticks all of them. The Liquid templating is limiting compared to a full framework but it never gets in the way for a site this simple.

> I considered Hugo (faster builds, Go-based) and Eleventy (more flexible, JS-based). Jekyll won because I wanted something boring that I wouldn't have to think about.

## The Layout

The main design decision was the sidebar with everything anchored to the bottom. I wanted the navigation to feel like a tool panel rather than a header — something you glance at rather than interact with constantly.

The colour palette switcher was a late addition. It started as a light/dark toggle and grew from there. The implementation is pure CSS variables plus ~30 lines of vanilla JS:

```javascript
function applyAccent(color) {
  document.documentElement.style.setProperty(
    "--accent",
    color === "default" ? "#89b4fa" : color
  );
}

bullets.forEach(function (bullet) {
  bullet.addEventListener("click", function () {
    const color = bullet.dataset.color;
    localStorage.setItem("accent", color);
    applyAccent(color);
    selectBullet(color);
  });
});
```

The `--accent` variable feeds into everything — links, active nav items, blockquote borders, tag pills. Changing one variable repaints the whole UI.

## Deployment

The deploy target in the Makefile:

```makefile
deploy:
    bundle exec jekyll build
    rsync -avz --delete _site/ user@danodic.dev:/var/www/site/
```

That's it. No CI pipeline, no containers, no deployment dashboard. Caddy serves the static files on the server side. The whole build-and-deploy takes about four seconds.

## Performance

Lighthouse scores on the home page:

| Metric          | Score |
|-----------------|-------|
| Performance     | 99    |
| Accessibility   | 96    |
| Best Practices  | 100   |
| SEO             | 91    |

The only external resource is the Google Fonts stylesheet for Quicksand. Everything else is self-contained.

## File Structure

```
_layouts/
  default.html     ← chrome (sidebar + content)
  home.html        ← post list + tag list
  post.html        ← individual post
  page.html        ← static pages
  tag_page.html    ← filtered post list by tag
_pages/
  music.md
  programming.md
  projects.md
_posts/
  ...
_sass/
  _chrome.scss     ← all styles
assets/
  css/style.scss   ← entry point
  img/logo-dark.svg
```

---

The source is on GitHub. Issues and PRs welcome, though I'll probably ignore them.
