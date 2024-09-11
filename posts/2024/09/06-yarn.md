---
title: Yarn Classic
summary: 'It is time to move on'
date: '2024-09-06'
slug: yarn
tags:
  - javascript
  - nodejs
---

Hey, are you using [yarn](https://classic.yarnpkg.com)? Great tool from [Facebook](https://facebook.com), right?

But how are you installing it?

`npm install -g yarn`?

### I have a bad news to tell you...

> Yarn has not been distributed on npm since 2019 because of breaking changes that could impact deployments - Google AI

and

> Those versions entered maintenance mode in January 2020 - [yarn classic website](https://classic.yarnpkg.com/lang/en/docs/install)

### So, what should I do?

Need to consider a better/newer package manager.

It could be:

- [the new yarn version](https://yarnpkg.com/): as of today (09/06), it is on version 4.4.1
- [PNPM](https://pnpm.io/), the faster alternative
- [The NPM itself](https://www.npmjs.com/). The official tool. In 2024, it is faster than yarn classic

There are a lot of benchmarks out there, like:

- https://romanglushach.medium.com/comparing-npm-yarn-and-pnpm-package-managers-which-one-is-right-for-your-distributed-project-to-4d7de2f0db8e
- https://refine.dev/blog/pnpm-vs-npm-and-yarn
- https://www.dhiwise.com/post/pnpm-vs-npm-vs-yarn-which-javascript-package-manager

### How about me?

I am using [PNPM](https://pnpm.io/) in my latest projects, both pet and professional, but already had some issues with it.

It all case by case, but I strongly recommend to use [PNPM](https://pnpm.io/) for fast local builds and CI.
