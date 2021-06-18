// deno-lint-ignore-file camelcase
import { RouterContext, create, getNumericDate } from "../deps.ts";
import { getId } from "../services/merchant.js";
export default async function auth(context: RouterContext) {
  if (!context.request.hasBody) {
    context.throw(400, "Bad Request: body is missing");
  }

  const body = context.request.body();
  const { email, password } = await body.value;
  if (!email || !password) {
    context.throw(400, "Bad Request: email/password is missing");
  }

  const responseBody = {
    access_token: await getToken(await getPayload(email, password)),
  };

  context.response.body = responseBody;
  context.response.status = 200;
}

function getToken(payload: Payload): Promise<string> {
  const secret = Deno.env.get("API_SECRET") as string;

  return create({ alg: "HS512", typ: "JWT" }, payload as any, secret);
}

async function getPayload(email: string, password: string): Promise<Payload> {
  return {
    _id: await getId({email, password}),
    exp: getNumericDate(60 * 60)
  };
}

interface Payload {
  _id: string
  exp: number
}