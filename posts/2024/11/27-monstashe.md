---
title: Monstache
summary: A tool to stream data from mongodb to elasticsearch
date: '2024-11-27'
slug: monstache
tags:
  - tools
  - elasticsearch
  - mongodb
  - golang
---

There was a requirement here to stream data from [mongodb](https://www.mongodb.com/) to [Elasticsearch](https://www.elastic.co/), and I decided to research the existing tools.

We could use [elasticsearch-river-mongodb](https://github.com/richardwilly98/elasticsearch-river-mongodb/wiki), [implement a stream process in node](https://medium.com/@amulyakashyap09/stream-mongodb-to-elasticsearch-using-node-js-755b407eb744), some payed solutions... then I found [monstache](https://rwynn.github.io/monstache-site/) - a stream implementation in golang.

## The good parts

- Monstache is just a single binary without dependencies on runtimes like Ruby, Python or PHP - a [scratch image](https://hub.docker.com/_/scratch) should do the work
- It does accept [transformations](https://rwynn.github.io/monstache-site/advanced/#transformation) - working sample [here](https://github.com/adamatti/learn-monstache/commit/51ab57c1be5adb3b60555a74838e49c50ffa05d4)
- [Mappings](https://rwynn.github.io/monstache-site/advanced/#index-mapping) - working sample [here](https://github.com/adamatti/learn-monstache/commit/5ff11d50148354a28c8e027c7935fa0129607013)
- [Versioning](https://rwynn.github.io/monstache-site/advanced/#indexing-metadata)? - working sample [here](https://github.com/adamatti/learn-monstache/commit/9768a64a0e12ac4c0926049b6731c377013df9bc)
- Fetch references? check [embedding documents](https://rwynn.github.io/monstache-site/advanced/#embedding-documents)
- A lot of mongo/elastic [configurations](https://rwynn.github.io/monstache-site/config) - e.g. replay, resume, resume-strategy
- The [docker image](https://hub.docker.com/layers/rwynn/monstache/6.7.17/images/sha256-a275e45f20e2f2e64f30140479469b1241be340cd81ac5641ac391edcb1d092f?context=explore) is less than 15 mb (compressed size)

## Ok, how can I make it faster?

From [the docs](https://rwynn.github.io/monstache-site/advanced/#middleware):

> It is HIGHLY recommended to use a golang plugin in production over a javascript plugin due to performance differences. Currently, golang plugins are orders of magnitude faster than javascript plugins. This is due to concurrency and the need to perform locking on the javascript environment. Javascript plugins are very useful for quickly prototyping a solution, however at some point it is recommended to convert them to golang plugins

For a golang working sample, check [my repo](https://github.com/adamatti/learn-monstache/commit/ae4d813485246f284d4583c4712a4adfaa94d44c)

## The bad parts

It uses [streams](https://x.com/baptistejamin/status/1615310358528376832), and it seems it is not performant as using oplog ([ref](https://jira.mongodb.org/browse/SERVER-46979))

## Conclusion

I would give it a try and perform additional performance tests prior to go to prod.

It is nice it does support [multiple workers](https://rwynn.github.io/monstache-site/advanced/#workers), [High Availability](https://rwynn.github.io/monstache-site/advanced/#high-availability), etc

It has almost 9yrs since [first commit](https://github.com/rwynn/monstache/commit/04c590bf0896330405eeb12614aba1fc8e570fba), [1.3k starts on github](https://github.com/rwynn/monstache), [videos on youtube](https://www.youtube.com/results?search_query=monstache+elastic)

## References

- [Monstache Github Repo](https://github.com/rwynn/monstache)
- [Monstache Website/Documentation](https://rwynn.github.io/monstache-site/)
- [Github - my working sample](https://github.com/adamatti/learn-monstache)
- [A docker compose with all you need](https://github.com/rwynn/monstache-showcase/blob/master/docker-compose.sc.yml)
- [Step by Step how to create a golang plugin](https://github.com/rwynn/monstache/wiki/Go-plugin-guide)
