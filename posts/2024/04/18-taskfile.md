---
title: Taskfile - an alternative for Makefiles
date: '2024-04-18'
slug: taskfile
summary: A 5 minutes tutorial
tags:
  - javascript
  - typescript
  - tools
---

Ok, Make/Makefiles are great. I spoke about then in the [last post](/blog/posts/2024-04-08-makefile).

But what if:

- I want to break them in different files
- Use a better syntax (maybe yaml?)
- Cache the tasks, even the ones that don't generate artifacts (e.g. lint)
- put tasks and aliases close
- validate the task execution
- have global tasks to run in any folder (e.g. backup)
- dry run
- watch task

#### Taskfile to rescue

Just need to [install Task](https://taskfile.dev/installation/) (or go-task on [github](https://github.com/go-task/task)).

The [documentation](https://taskfile.dev/) is pretty simple IMHO, but I want to highlight some things that I do use in daily bases that I think it does a great difference.

## Show me the code

For this I will use the sample from [previous post](/blog/posts/2024-04-08-makefile) ([makefile here](https://github.com/adamatti/node-sample/blob/main/Makefile))

```yaml
# yaml-language-server: $schema=https://json.schemastore.org/taskfile.json
---
version: '3'

env:
  DATABASE_URL: postgres://postgres:sample@localhost:5432/sample

includes:
  docker-compose:
    aliases: [dc]
    taskfile: ./Taskfile-docker-compose.yaml
  prisma:
    aliases: [p]
    taskfile: ./Taskfile-prisma.yaml

tasks:
  default:
    desc: Show help
    aliases: [h]
    silent: true
    cmds:
      - task -l --sort alphanumeric

  clean:
    desc: Remove node modules
    aliases: [c]
    cmds:
      - rm -rf node-modules

  install:
    desc: Install dependencies
    aliases: [i]
    run: once
    cmds:
      - npm install
    preconditions:
      - test -f package.json
      - test -f package-lock.json
    sources:
      - package.json
      - package-lock.json
    status:
      - test -d node_modules

  run-only:
    aliases: [ro]
    interactive: true
    ignore_error: true
    dotenv: ['.env']
    cmds:
      - task: install
      - task: prisma:generate
      - npx --yes esno src/index.ts

  run:
    desc: Run the project
    aliases: [r]
    cmds:
      - task: docker-compose:up
      - task: prisma:push
      - task: run-only
```

There are a lot of things going on here, so trying to explain some things:

1. The first line is just for auto complete on IDEs (like vscode, zed)
2. We can define global env vars in the script itself (e.g. `DATABASE_URL`)
3. We can [import](https://taskfile.dev/usage/#including-other-taskfiles) part of the scripts. You just need to have your global ones (e.g. terraform, docker-compose, prisma, git, etc). It does work with remote files.
4. You can expose/hide tasks with [internal flag](https://taskfile.dev/usage/#internal-tasks)

## Now the best part - cache

Pay a close look on the install task.

1. it only runs if `package.json` and `package-lock.json` are present ([programatic checks](https://taskfile.dev/usage/#using-programmatic-checks-to-cancel-the-execution-of-a-task-and-its-dependencies))
2. [Prevent unnecessary work](https://taskfile.dev/usage/#prevent-unnecessary-work): it caches the execution using the `source` attribute.
3. at the end it checks if the `node_modules` folder was created.
4. Even caching based on the `source`, if you remove the `node_modules` folder (check) it will run again.

## Ok, show me a normal day of work

At the first time, you just need to run `task r` to run the app. It will install dependencies, start database, apply db changes and run the app.

But what happen if someone changes a dependency? No problem. Taskfile will detect and will run `npm install` again.

But if someone just changes the db schema? No problem. It will generate the classes again.

If nothing changes, it will just run the app (ok, the docker part is not optimized, but you got the idea).

If need to stop the app and run again you can go direct to `task ro` (ro = run only).

## Full Project

As always, the full sample is available on [github](https://github.com/adamatti/node-sample).

## Closing thoughts

Now go to the [documentation](https://taskfile.dev/usage/).

Remove commands from `README.md` files and confluence/sharepoint. Also remove it from anemic `package.json` 😛

My global taskfiles are shared [here](https://github.com/adamatti/dotfiles/tree/main/taskfile) for reference.

My backup scripts using rsync are also on taskfiles, but this is a subject for another post.

