---
title: AI IDEs
summary: Track of IDE usage
date: '2026-03-01'
slug: ai-ides
tags:
  - ai
  - cursor
  - claude
---

Disclaimer: table generated with [Grok](https://grok.com/), except by the last column.

| AI IDE / Tool | Company | Free Tier / Version                          | Pricing (Paid) |Pros | Cons | My notes |
|--------------------|---------------------------|----------------------------------------------|------------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------| -- |
| [Cursor](https://cursor.com/)                     | [Anysphere](https://anysphere.inc/)         | Hobby: 2,000 completions/mo + 50 slow premium requests; 14-day Pro trial | $20/user/mo (Pro), $40/user/mo (Business) | Best-in-class agentic features (Composer/Agent mode), excellent multi-file edits & repo understanding, fast UX, supports multiple models (Claude, GPT, Gemini, etc.) | Free tier very limited after trial, higher price than some rivals, can feel unpredictable on very complex refactors | Using it for work |
| [Claude Code](https://claude.com/product/claude-code) | [Anthropic](https://www.anthropic.com/)     | Limited free tier / API credits; terminal-focused | ~$17–20/mo (Pro equivalent via API usage or plans), pay-as-you-go | Exceptional reasoning/debugging, massive 200K+ context, ideal for complex logic/architecture, integrates well into VS Code/terminal | More CLI/agent than full visual IDE, costs scale with heavy usage, no native multi-file editor UI | Planning to use it for work. Everyone in my bubble is migrating to claude |
| [Google Antigravity](https://antigravity.google/) | [Google](https://antigravity.google/) | Yes — full public preview (generous limits, no hard cutoff yet); some Pro features emerging | Free (preview); ~$20/mo Pro expected soon | Completely free access right now (Gemini 3 Pro + others), huge context (1M+ tokens), strong multi-agent planning, browser/automation skills | Preview-stage bugs & quota complaints (e.g., refresh inconsistencies), Google ecosystem lock-in, maturity still catching up | Using for personal projects |
| [GitHub Copilot](https://github.com/features/copilot) | [GitHub / Microsoft](https://github.com/features/copilot) | Limited free (students/open-source); 50 requests/mo trial in some cases | $10/mo (Individual), $19–39/mo (Business/Enterprise) | Mature & reliable, works in many IDEs (VS Code, JetBrains, etc.), excellent GitHub integration, model choice (Claude, GPT, Gemini) | Less fully agentic than dedicated IDE forks (more autocomplete + chat), subscription needed for full power | Second option when no credits on antigravity. On free tier, it is dumber than antigravity |
| [Windsurf](https://windsurf.com/) | [Windsurf](https://windsurf.com/) (originally Codeium) | Yes — generous for individuals: 25 credits/mo, unlimited basic completions, limited Cascade/agent flows | $15/mo (Pro: 500 credits), $30/user/mo (Teams) | Strong value & speed, great for prototyping & budget users, solid multi-file & autocomplete, often called best free-capable option | Credit limits hit heavy users quickly on free tier, slightly behind Cursor in some deep reasoning/agent benchmarks | Planning to use it for personal projects | 

Also planning to play with vscode + [qwen](https://github.com/QwenLM) + ([cline](https://marketplace.visualstudio.com/items?itemName=saoudrizwan.cline) or [continue](https://marketplace.visualstudio.com/items?itemName=Continue.continue))