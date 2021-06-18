import { Application, Router, parse } from "./deps.ts" 
import router from "./router.ts"
const app = new Application()



app.use(router.routes())
app.use(router.allowedMethods())

app.addEventListener('listen', () => console.log('Running..'))

const DEFAULT_PORT = 8000
const argPort = parse(Deno.args).port
await app.listen({ port: argPort ?? DEFAULT_PORT })