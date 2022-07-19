/* eslint-disable no-console */
/* eslint-disable prettier/prettier */

import { json } from "co-body";

export async function getClientPoints(ctx: Context) {
  
  const {
    clients: { clientPoints },
    req
  } = ctx;

  const body = await json(req);

  let clientId = body?.profile?.id?.value;

  let userPoints : any = null;
  if(clientId)
    userPoints = await clientPoints.getPoints(clientId);
  else if(ctx?.req?.headers["x-colossus-params"]){
        const reqId : any = ctx.req.headers["x-colossus-params"];
        clientId = reqId.split("=")[1];
        userPoints = await clientPoints.getPoints(clientId);
  }

  ctx.status = 200;
  ctx.body = {
    profile:{
      points:{
        value: userPoints?.points
      }
    },
    public:{
      isLoggedIn: {
        value: !!clientId
      }
    }
  };
}


