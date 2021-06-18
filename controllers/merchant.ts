// POST /merchant
// content string body
// Status: 201 Created
// Status: 400 Bad Request

import { RouterContext } from ".././deps.ts"
import  Merchant from ".././models/merchant.ts"
import { create, update } from ".././services/merchant.js"

export async function createMerchant(context: RouterContext) {
  if (!context.request.hasBody) {
    context.throw(400, "Bad Request: body is missing")
  }

  const body = await context.request.body().value 
  
  const payload: Merchant = {
      name: String(body.name),
      surname: String(body.surname),
      password: String(body.password),
      email: String(body.email),
      number: String(body.number),
      address: String(body.address),
      avatar: String(body.avatar),
      created_date: new Date(),
      uptated_date: new Date()
  }

  if (!payload) {
    context.throw(400, "Bad Request: content is missing")
  }

  const merchant: any = await create(payload)

  context.response.body =  merchant
  context.response.status = 201
}

export async function updateMerchant(context: RouterContext) {
  if (!context.request.hasBody) {
    context.throw(400, "Bad Request: body is missing")
  }

  const body = await context.request.body().value 
  
  const payload: Merchant = {
      name: String(body.name),
      surname: String(body.surname),
      password: String(body.password),
      email: String(body.email),
      number: String(body.number),
      address: String(body.address),
      avatar: String(body.avatar),
      created_date: new Date(),
      uptated_date: new Date()
  }

  if (!payload.email && !payload.password) {
    context.throw(400, "Bad Request: content is missing")
  }

  const merchant: any = await update(payload)

  context.response.body =  merchant
  context.response.status = 200
}