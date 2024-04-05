---
title: Vinejs - js validation lib
date: "2024-04-05"
slug: vinejs
summary: An alternative to zod
tags:
  - javascript
  - typescript
---

Just saw this new lib today - [Vinejs](https://vinejs.dev/). It called my attention as it is very similar to [zod](https://zod.dev/), but seems to be faster. Definitely I will consider it for my next pet projects.

#### Basic Example

```typescript
import vine from '@vinejs/vine'

const schema = vine.object({
  email: vine.string().email(),
  password: vine
    .string()
    .minLength(8)
    .maxLength(32)
    .confirmed()
})

const data = getDataToValidate()
await vine.validate({ schema, data })
```

#### Benchmarks

<div style="align:center">
  ![Benchmarks](/assets/posts/2024-04-05-vinejs/benchmark.jpg)
</div>