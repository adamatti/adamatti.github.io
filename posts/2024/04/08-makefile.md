---
title: Makefiles - How to use them for automations
date: "2024-04-08"
slug: makefile
summary: A 5 minutes tutorial
tags:
  - javascript
  - typescript
  - tools
---

Imagine the follow scenario: you do have a node api with typescript, that uses a database (postgres in this sample) and an orm ([prisma](https://www.prisma.io/)). Every time someone in the team adds a new dependency, you need to run `npm install`. 

Database changes? You need to generate the classes again with `npm run prisma generate`. Oh, you also need to apply the changes with `npm run prisma db push` (note: a real world project would use migrations files, so `npm run prisma migrate dev`).

Then you moved to another service. Then moved back... oh, now need to start database again with `docker-compose up -d`. And so one... 

The steps are documented in a readme file. Or you can get it from `package.json` -> `scripts`, but there is no comments there or command order/dependence. 

What do you do? 

#### Makefile to rescue

So, Make is a build automation tool (thanks [wikipedia](https://en.wikipedia.org/wiki/Make_(software)), and it is available by default in all unix systems.

With that you can:
- create goals (tasks)
- create multi line commands
- use vars
- use conditions
- create aliases for the commands
- map task dependencies
- avoid re-running a task if artifact is already created (e.g. build). "Kind" of a cache (strong quotes here)

#### So, show me a sample!

Sure... check this one (full project [here](https://github.com/adamatti/node-sample)):

```makefile
default:
	@echo "Please specify a target to run"

clean:
	rm -rf node_modules

node_modules:
	npm install

docker-compose-up:
	docker-compose up -d

prisma-db-push:
	npx --yes wait-on tcp:5432 && \
	DATABASE_URL=postgres://postgres:sample@localhost:5432/sample npm run prisma db push

prisma-generate:
	npm run prisma generate

run-only:
	DATABASE_URL=postgres://postgres:sample@localhost:5432/sample \
	npx --yes esno src/index.ts

run: docker-compose-up prisma-generate prisma-db-push run-only

format:
	npm run prisma format
	npx --yes biome format --write ./src

# Aliases
install: node_modules
dcu: docker-compose-up
pdp: prisma-db-push
pg: prisma-generate
r: run
ro: run-only
first: clean install run
fresh: first
f: fresh
```

As you can see, a simple task is just 

```makefile
taskname: dependency1 dependency2
    my list of commands
    second command here
    etc
```

with the sample provided, I can install dependencies with `make node_modules`. 

If you run it again, it will do nothing as the `node_modules` folder is already present (task name = folder name).

If I want to run my app the first time, I just need `make fresh`, and it will:
- install dependencies
- start database
- generate orm classes
- update database
- run the app

If I want to run the app again, I don't need the full steps. I can go direct to `make run-only`.

#### Ok, I am lazy than that

With dependencies, you can create aliases. e.g.

```makefile
r: run
ro: run-only
```

Now I just need `make r` to run my app. Or `make ro` to run-only.
Note: I am lazier than that, I also [have an alias](https://github.com/adamatti/dotfiles/blob/bb23c786a3181b977874efe83530b65ec5de804a/zsh/aliases.zsh#L3) to run `make` with `m` only 😛

#### How about the default task?

It uses the first task. Or the one defined on `.DEFAULT_GOAL := help` (add it as one of the first lines).

#### Ok, but how about documentation

There is a [trick](https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html) for that - just add those lines in the beginning of the file:

```makefile
.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
```

...plus, `## comment` in the tasks you want comments. E.g.

```makefile
clean: ## remove dependencies
	rm -rf node_modules

prisma-generate: ## generate prisma classes
	npm run prisma generate
```

Now you just need to run `make` or `make help` to see all tasks and comments, sorted by task name, e.g.

```shell
> make help
clean                          remove dependencies
docker-compose-up              start dependencies
first                          first execution
format                         format code
fresh                          fresh execution
install                        install dependencies
prisma-db-push                 push prisma schema to database
prisma-generate                generate prisma classes
run-only                       run the project
run                            run the project + dependencies
```

#### Advanced

- How to hide the command from output? Just add `@` in the front of the command.
- call an existing task in the middle/end of my commands? `$(MAKE) your task`
- cache task? the task should match with the output folder or file name

#### Show me the full project

It is [here](https://github.com/adamatti/node-sample), and the makefile is [here](https://github.com/adamatti/node-sample/blob/main/Makefile)

#### Why post about makefile?

Because this is the [most watched video on my channel](https://www.youtube.com/watch?v=h4aV3C6BRDQ). And a lot of developers still adding commands on readme files on partially on package.json. We developers should automate things, even our daily tasks.