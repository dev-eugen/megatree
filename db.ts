import Datastore from 'https://deno.land/x/dndb@0.3.1/mod.ts'
const merchant = new Datastore({ filename:"./database/merchant.db", autoload: true })

export { merchant }