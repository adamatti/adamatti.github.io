---
title: 'OrbStack'
summary: 'A docker-desktop replacement'
date: '2024-10-28'
slug: orbstack
tags:
  - k8s
  - kubernetes
  - docker
---

Today I replaced [docker-desktop](https://www.docker.com/products/docker-desktop/) by [OrbStack](https://orbstack.dev/).

Like mentioned by [OrbStack](https://orbstack.dev/):

> OrbStack is the fast, light, and easy way to run Docker containers and Linux. Develop at lightspeed with our Docker Desktop alternative

It is fully compatible, so no drastic changes.

You can check the [Docker x OrbStack comparison](https://docs.orbstack.dev/compare/docker-desktop), [Colima x OrbStack](https://docs.orbstack.dev/compare/colima) or [a review from @vortj](https://medium.com/@vortj/orbstack-review-a-game-changer-for-macos-developers-f1931a9db227).

If you want to fully uninstall docker desktop you can do it [here](https://docs.docker.com/desktop/uninstall/).

It also provides [kubernetes features](https://docs.orbstack.dev/kubernetes/), but I am using [kind](/blog/posts/2024-10-22-kind) for that.
