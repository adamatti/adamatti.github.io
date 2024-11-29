---
title: Memory Leak in nodejs/javascript
summary: Some steps for finding/troubleshooting it
date: '2024-11-29'
slug: memory-leak
tags:
  - javascript
  - nodejs
---

Recently I was working on a nodejs/express application to troubleshoot a memory leak. Those were the steps and tools I followed to identify the root cause.

## 1. Reproduce the issue

We had it in two modules, one a http server and the other a sqs consumer.

#### For the http server

Created a [k6](https://k6.io/) script for a small performance test:

```javascript
// script.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const url = 'http://localhost:3000/test';
  const res = http.get(url);
  check(res, { success: (r) => r.status === 200 });
}
```

And ran it with:

```bash
# 100 users, 1 hour
k6 run -u 100 -d 1h script.js
```

#### For the SQS consumer

Built a send command (note: I am using [localstack](https://localstack.cloud/)):

```bash
# send.sh
AWS_REGION: "us-east-1" aws --endpoint-url=http://localhost:4566
    sqs send-message
    --region "us-east-1"
    --queue-url http://localhost:4566/000000000000/queue
    --message-body '{"my": "message"}'
```

and ran with with watch:

```bash
watch -n .1 ./send.sh
```

## 2. Next step, collect the data

Initially I was using node itself for generating it, e.g:

```typescript
import v8 from 'node:v8';
// ...
app.get('/heapdump', (req, res) => {
  const fileName = v8.writeHeapSnapshot();
  res.send({ fileName });
});
```

but we can also use chrome devtools for this (I am using [brave](https://brave.com/), but sames applies):

- run the app with the flag `--inspect`
- go to `chrome://inspect` / `brave://inspect`, connect
- go to `Memory` tab, click on `Take Heap Snapshot`

## 3. Analyze the data

That is the tricky part. Pick the initial snapshot, run the test, pick the final snapshot, and compare.

Try to correlate what you have there with the code. `Allocation on timeline` was also helpful for me.

I strongly recommend take a look on [this presentation](https://www.youtube.com/watch?v=hliOMEQRqf8) for detailed explanation and showcase:

<iframe width="560" height="315" src="https://www.youtube.com/embed/hliOMEQRqf8?si=iQ3kfqgyt6Aa_TZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Next?

Now is the time to apply a fix and re-run the tests.

We found a lot of [DerivedLogger](https://github.com/winstonjs/winston/blob/c69cdb0cec15a138e0b6e374501e027d1c39606c/lib/winston/create-logger.js#L36) in the memory. It was because the code was calling `winston.createLogger` on each call to enrich the log. We switched to [child](https://github.com/winstonjs/winston#creating-child-loggers) call and problem solved.

There was no need to use [clinic.js](https://clinicjs.org/) this time.

