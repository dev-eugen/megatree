import { Router } from "./deps.ts";

// merchant 
import {createMerchant, updateMerchant} from "./controllers/merchant.ts"
import auth from "./controllers/auth.ts"

const router = new Router()

router
    .get('/', (ctx) => {
      ctx.response.body = 'Welcome to megatree'
    })
    .post('/auth', auth)
    .post('/register', createMerchant)
    .patch('/register', updateMerchant)

    export default router