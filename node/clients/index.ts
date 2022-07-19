import { IOClients } from '@vtex/api'

import Session from './session'

import Status from './status'

export class Clients extends IOClients {
  public get clientPoints() {
    return this.getOrSet('points', Session);
  }

  public get status() {
    return this.getOrSet('status', Status)
  }

}
