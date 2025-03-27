import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

// 創建 Oak 應用
const app = new Application();
const router = new Router();

router.get('/', (ctx)=>ctx.response.redirect('./index.html'))

// 讓 `/frontend` 提供靜態檔案 (HTML, CSS, JS, 圖片等)
app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}`,
    index: "index.html",
  });
});

// 設定伺服器監聽 8080 端口
//const port = 8080;
console.log('Server run at : http://127.0.0.1:8080');
await app.listen({ port: 8080 });
