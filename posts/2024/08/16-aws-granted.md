---
title: AWS Granted
summary: "A tool to easily access AWS roles"
date: "2024-08-16"
slug: aws-granted
tags:
  - aws
  - tools
---

I was trying to find an alternative to [aws-sso-creds-helper](https://www.npmjs.com/package/aws-sso-creds-helper) since it is archived/deprecated.

The "official" AWS solution is not great either (`aws sso login --profile <profile_name>`).

My coworkers are using [granted](https://docs.commonfate.io/granted/introduction). 

The [installation](https://docs.commonfate.io/granted/getting-started#installing-the-cli) was simple:

```
brew tap common-fate/granted
brew install granted
```

The [configuration](https://docs.commonfate.io/granted/usage/automatic-config-generation#all-available-aws-sso-roles) was all auto generated:

```
granted sso generate --sso-region ap-southeast-2 https://example.awsapps.com/start
```

And to use is basically `assume <role>`. I can even add it to my existing scripts.

We can also [export it to .env file](https://docs.commonfate.io/granted/usage/dotenv):

```
assume role-a --env
```

Plus, [we can access different profiles in different browser tabs](https://docs.commonfate.io/granted/usage/console):

```
assume -c <role>
```

Super useful, highly recommended.