import { Application, Router, parse } from "./deps.ts"; 

const app = new Application();

const router = new Router();

router
    .get('/', (ctx) => {
      ctx.response.body = 'Welcome to notes API';
    })

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', () => console.log('Running..'));

const DEFAULT_PORT = 8000;
const argPort = parse(Deno.args).port;
await app.listen({ port: argPort ?? DEFAULT_PORT })