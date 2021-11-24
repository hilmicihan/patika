const Koa = require('koa');
const KoaRouter = require('koa-router');
const app = new Koa();
const router = new KoaRouter();


router.get("/", ctx => (ctx.body = "<h1>INDEX sayfasına hoşgeldiniz</h1>"));
router.get("/about", ctx => (ctx.body = "<h1>About sayfasına hoşgeldiniz</h1>"));
router.get("/contact", ctx => (ctx.body = "<h1>Contact sayfasına hoşgeldiniz</h1>"));
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);