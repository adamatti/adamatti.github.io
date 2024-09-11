---
title: Cloudflare workers
summary: 'Just created my hello world there'
date: '2024-09-10'
slug: cloudflare
tags:
  - javascript
  - nodejs
  - typescript
---

I just tried the new cloudflare worker. To create a sample and deploy there, you just need to run one single command:

```
pnpm create cloudflare@latest <project name>
```

... and of course, a lot of prompts.

I removed some dead code (editor config, prettier), added [biome](https://biomejs.dev/), added a [taskfile](https://taskfile.dev/) (I will forget the commands). Also played with [Hono](https://github.com/honojs/hono) - the web framework [suggested by Cloudflare](https://www.youtube.com/watch?v=H7Qe96fqg1M) and added an AI endpoint.

Pretty simple, reminds me the good old days with the free [Heroku](https://www.heroku.com/) tier.

For sure I will consider it for my pet projects.

My full code is available on [github](https://github.com/adamatti/learn-cf-worker).

Next, I will try it with [remix](https://remix.run/) for a full stack experience.
