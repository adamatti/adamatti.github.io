---
title: 'Mise: a version manager'
summary: 'A replacement for gvm, nvm, etc'
date: '2024-09-24'
slug: mise
tags:
  - tools
---

I saw in twitter some time ago, I think it was suggested by [Akita](https://twitter.com/AkitaOnRails?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) - disclaimer: unable to check here as [twitter still blocked in Brazil](https://www.bbc.com/news/articles/c5y3rnl5qv3o) - about [mise](https://github.com/jdx/mise), a version manager.

Previously I was using [gvm](https://github.com/moovweb/gvm) for golang, [fnm](https://github.com/Schniz/fnm) for node (it is like [nvm](https://github.com/nvm-sh/nvm), but faster), [sdkman](https://sdkman.io/) for java/jvm, some crazy tools for python/ruby, and [brew](https://brew.sh/) for the other (e.g. [bun](https://bun.sh/), [deno](https://deno.com/)).

With [mise](https://github.com/jdx/mise) I can use one tool for all. It is great because:

### 1. It does respect the other format configurations

`.ruby-version`? `.nvmrc`? We don't need to change existing projects to use it.

### 2. It is easy to install

`mise install` in an existing app, `mise use node@lts` / `mise use deno@latest` / etc to add a new dependency.

You can also install global ones, like `mise use --global opentofu@latest`

### 3. Easy to check required versions

Just run `mise ls`

### 4. Easy to upgrade all

`mise up`

### 5. It has hundreds of integrations

Check it all at [here](https://mise.jdx.dev/plugins.html)

### Others

It does integrate with bash / zsh for auto version switch (switch on cd).

It does support environment vars control and task automation, but I do prefer other tools for that.

I hope you enjoy it, let me know your thoughts in the comments.
