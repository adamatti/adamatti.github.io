---
title: MCP sample - HTTP
summary: A basic MCP http server sample with typescript
date: "2025-04-28"
slug: mcp-http
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
import express, { Request, Response } from "express";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

///////////////////////////////////////////////////////////////////////////////
const tools = [
  {
    name: "Sum",
    description: "do a sum",
    inputSchema: z.object({ x: z.number(), y: z.number() }),
    handler: (args: { x: number; y: number }) => ({
      content: [
        {
          type: "text" as const,
          text: `${args.x} + ${args.y} = ${args.x + args.y}`,
        },
      ],
    }),
  },
];

const mcpServer = new McpServer({ name: "mcp-server", version: "0.0.1" });

for (const tool of tools) {
  mcpServer.tool(
    tool.name,
    tool.description,
    tool.inputSchema.shape,
    tool.handler
  );
}

///////////////////////////////////////////////////////////////////////////////
const app = express();

// to support multiple simultaneous connections we have a lookup object from
// sessionId to transport
const transports: { [sessionId: string]: SSEServerTransport } = {};

app.get("/sse", async (req: Request, res: Response) => {
  const transport: SSEServerTransport = new SSEServerTransport(
    "/messages",
    res
  );
  const sessionId = transport.sessionId;

  transports[transport.sessionId] = transport;
  res.on("close", () => {
    delete transports[sessionId];
  });
  await mcpServer.connect(transport);
});

app.post("/messages", async (req: Request, res: Response) => {
  const sessionId = req.query.sessionId as string;
  const transport = transports[sessionId];
  if (transport) {
    await transport.handlePostMessage(req, res);
  } else {
    res.status(400).send("No transport found for sessionId");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`HTTP Server running on port`, { port });
});
```

# Test

Run server:

```sh
pnpm dlx esno ./sample.ts
```

Connect to SSE to create a session and receive responses (keep it running):

```sh
curl -N http://localhost:3000/sse
```

To list tools:

```sh
curl --request POST \
  --url 'http://localhost:3000/messages?sessionId={SESSION ID}' \
  --header 'content-type: application/json' \
  --data '{"jsonrpc": "2.0", "id": 1, "method": "tools/list", "params": {}}'
```

To do a call:

```sh
curl --request POST \
  --url 'http://localhost:3000/messages?sessionId={SESSION ID}' \
  --header 'content-type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "Sum",
    "arguments": {
      "x": 1,
      "y": 2
    }
  }
}'
```

For a cli sample check it [here](/blog/posts/2025-04-28-mcp-cli);
