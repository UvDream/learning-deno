import { serve } from "https://deno.land/std@v0.50.0/http/server.ts";
const PORT = 8080;
const s: any = serve({ port: PORT });
console.log(`服务监听在${PORT}端口`);
for await (const req of s) {
  req.respond({ body: "Hello Word!" });
}
