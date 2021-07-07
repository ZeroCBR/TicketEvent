import {Injectable} from '@angular/core'
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http'
import {Observable} from 'rxjs'
import { ConfigService } from '../services/config.service'

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor(private config: ConfigService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setParams:{
        apikey: this.config.apiKey
      }
    })
    return next.handle(request)
  }
}
