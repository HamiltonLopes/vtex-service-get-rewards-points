/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import { json } from 'co-body';
import axios from 'axios';

export async function handler(ctx: Context) {
  const { req } = ctx;

  const body: any = await json(req);

  console.log("body ",body);

  const clientId = body?.profile?.id;

  console.log(clientId);

  let userPoints = null;

  if(clientId){
    const response = await axios.get(`https://rewardsapi.tk/rewards-api/v1/points/${clientId}`);

    userPoints = await response.data.points;
  }

  ctx.status = 200
  ctx.body = {
    profile:{
      points:{
        value: userPoints
      }
    },
    public:{
      isLoggedIn: {
        value: !!clientId?.value
      }
    }
  }
}
