/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import { json } from 'co-body';

export async function handler(ctx: Context, next: () => Promise<any>) {
  const { req } = ctx;

  const body: any = await json(req);

  console.log("body ",body);

  const clientId = body?.profile?.id;

  console.log(clientId);

  //let userPoints = null;

  //ctx.status = 200
  

  await next()
}