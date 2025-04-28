---
title: MCP sample - CLI
summary: A basic MCP sample for CLI with typescript
date: "2025-04-28"
slug: mcp-cli
tags:
  - typescript
  - ai
  - mcp
---

The idea here is not explain what MCP is, just show a sample:

# Dependencies

Install it with npm/yarn/pnpm:

- @modelcontextprotocol/sdk
- zod

# Code

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

const tools = [
  {
    name: "Sum",
    description: "do a sum",
    inputSchema: z.object({ x: z.number(), y: z.number() }),
    handler: (args) => ({
      content: [
        { type: "text", text: `${args.x} + ${args.y} = ${args.x + args.y}` },
      ],
    }),
  },
];

const server = new Server(
  { name: "mcp-server", version: "0.0.1" },
  { capabilities: { tools: {} } }
);
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: tools.map((t) => ({
      name: t.name,
      description: t.description,
      parameters: t.inputSchema,
    })),
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    const tool = tools.find((t) => t.name === name);
    if (!tool) {
      throw new Error(`Tool unknown: ${name}`);
    }
    return await tool.handler(args);
  } catch (error) {
    console.error(`Error executing tool ${name}:`, error);
    throw error;
  }
});

const main = async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
};

main();
```

# Sample calling

List tools:

```sh
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/list"}' | pnpm dlx tsx cli.ts
```

Executing operation:

```sh
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": "Sum", "arguments": {"x": 1, "y": 2}}}' | pnpm dlx tsx cli.ts
```
