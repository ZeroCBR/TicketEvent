import {Injectable} from '@angular/core'
import { Environment } from '../../../environments/types';
import {environment} from '../../../environments/environment'

@Injectable()
export class ConfigService {
  private config: Environment;

  constructor() {
    this.config = environment
  }

  get apiKey(){
    return this.config.apiKey
  }

  get ticketMasterUrl(){
    return this.config.ticketMasterUrl
  }
}
