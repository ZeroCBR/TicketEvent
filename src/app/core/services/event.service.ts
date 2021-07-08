import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient, HttpParams} from '@angular/common/http'
import {catchError} from 'rxjs/operators'
import { ConfigService } from './config.service'
import { SearchParam } from '../models/search.model'

@Injectable()
export class EventService {

  constructor(
        private config: ConfigService,
        private http: HttpClient
  ) { }

  getEventList(searchParam:SearchParam=null): Observable<any> {
    const url = `${this.config.ticketMasterUrl}/events`
    const params = this.buildRequestParams(searchParam)

    return this.http.get(url, {params}).pipe(
      catchError(err => {
        throw err
      })
    )
  }

  getEventById(id:string): Observable<any> {
    const url = `${this.config.ticketMasterUrl}/events/${id}`

    return this.http.get(url).pipe(
      catchError(err => {
        throw err
      })
    )
  }

  private buildRequestParams(searchParam: SearchParam = null): HttpParams {
    let params = new HttpParams()

    if (searchParam) {
      if (searchParam.id)
        params = params.append('id', searchParam.id)

      if (searchParam.keyword)
        params = params.append('keyword', searchParam.keyword)

      if (searchParam.size)
        params = params.append('size', searchParam.size)

      if (searchParam.page)
        params = params.append('page', searchParam.page)
    }

    return params
  }
}
