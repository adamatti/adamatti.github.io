---
title: Typescript Lib - Neverthrow
summary: "Encode failure into your program"
date: "2024-08-19"
slug: neverthrow
tags:
  - typescript
  - lib
---

Just saw [this tweet](https://x.com/mattpocockuk/status/1825552684994457946) from [@mattpocockuk](https://twitter.com/mattpocockuk), code below:

![neverthrow](/assets/posts/2024-08-19-neverthrow.jpeg)

[neverthrow](https://www.npmjs.com/package/neverthrow) is very similar to [arrow (kotlin)](https://arrow-kt.io/learn/typed-errors/working-with-typed-errors/) and the way [golang handle errors](https://go.dev/blog/error-handling-and-go).

## Why?

Great explanation on [readme](https://github.com/supermacro/neverthrow), very bottom:

> **Throwing** and **catching** is very similar to using **goto** statements - in other words; it makes reasoning about your programs harder. Secondly, by using **throw** you make the assumption that the caller of your function is implementing **catch**. This is a known source of errors. Example: One dev **throw**s and another dev uses the function without prior knowledge that the function will throw. Thus, and edge case has been left unhandled and now you have unhappy users, bosses, cats, etc.

> With all that said, there are definitely good use cases for throwing in your program. But much less than you might think.

## Would I use it in a production code (javascript/typescript)?

Probably not as it changes the way the language was designed. A lot of frameworks/libs/integrations expect the code to throw on error (e.g. sentry, datadog, [express](https://expressjs.com/en/guide/error-handling.html)).

Use [golang](https://go.dev/) instead. 

But definitely I would use it for pet projects, to make the code more functional and avoid **goto** calls.