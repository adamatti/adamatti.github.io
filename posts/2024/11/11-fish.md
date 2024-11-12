---
title: Fish Shell
summary: 'A new shell to rule them all'
date: '2024-11-11'
slug: fish
tags:
  - tools
---

Since ~2015 - wow, almost 10 years ago - I was using [zsh](https://www.zsh.org/) + [oh-my-zsh](https://ohmyz.sh), and it was great. But after some years it was becoming show, and since I love to try new things I decided to explore new shell options.

TL/DR: I am using [fish](https://fishshell.com/) now. Why?

- It seems faster, at least in those first days / fresh install
- I was using [oh-my-zsh](https://ohmyz.sh) mainly for aliases (e.g. [git](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/git/README.md)), but [abbreviations are much better for history and share commands](https://www.sean.sh/log/when-an-alias-should-actually-be-an-abbr/).
- Auto complete seems to works better + syntax highlight
- Functions (super easy syntax)
- All the things that I was using continue to work as expected (e.g. [mise](/blog/posts/2024-09-24-mise), [zoxide](https://github.com/ajeetdsouza/zoxide), etc). No reason to not work, but worth to mention
- Saw others moving from zsh to fish, it seems a natural moving
- [11 reasons here](https://itsfoss.com/fish-shell-features/)

# Super quick start

```bash
# Install fish on OSX
brew install fish

# Add it to possible terminals
code /etc/shells
# Manually add /opt/homebrew/bin/fish (ok, could do it with echo but choose not to)

# Change default terminal
chsh -s /opt/homebrew/bin/fish

# Have fun
```

# Customizations

- I installed [fisher](https://github.com/jorgebucaran/fisher) to add extensions, but didn't find a need for it yet. [Auto pair](https://github.com/jorgebucaran/autopair.fish) is the only one active
  - [fish-abbreviation-tips](https://github.com/gazorby/fish-abbreviation-tips) is great, but since switched aliases for [abbreviations](https://www.sean.sh/log/when-an-alias-should-actually-be-an-abbr/) it doesn't make sense anymore.
- For themes and colors I was using [starship](https://starship.rs/). Decided to stick on it for now, configs [here](https://github.com/adamatti/dotfiles/tree/main/starship).
- [Abbreviations!](https://www.sean.sh/log/when-an-alias-should-actually-be-an-abbr/) You can create it even for parameters and can edit the commands prior to execute.

# Next

- Join [reddit group](https://www.reddit.com/r/fishshell/)
- Take a look on [fisher plugins](https://github.com/jorgebucaran/awsm.fish#readme), [github repos](https://github.com/topics/fish), etc
- Add a star in the [fish-shell](https://github.com/fish-shell/fish-shell) repo
