import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

interface Points{
  Points: number
}
export default class Session extends ExternalClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super('https://rewardsapi.tk/rewards-api/v1/', ctx, {
      ...options,
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        "X-Vtex-Use-Https" : "true",
      }
    })
  }

  public async getPoints(clientId: string): Promise<Points> {
    return this.http.get(`points/${clientId}`);
  }

}
