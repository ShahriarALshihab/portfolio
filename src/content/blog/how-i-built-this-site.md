---
title: How I built this site
description: 'A quick look at the tools behind this portfolio and why I chose them.'
date: 2026-10-02
tags: ['astro', 'typescript']
---

This site is built with **Astro** and **TypeScript**. Astro sends plain HTML to the browser, so the
pages load fast.

## The pieces

1. Pages live in `src/pages`
2. Reusable parts live in `src/components`
3. Blog posts are Markdown files in `src/content/blog`

```ts
const posts = await getCollection('blog');
```

Adding a post is just adding a file.
