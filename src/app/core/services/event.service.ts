import {Injectable} from '@angular/core'
import {Observable, throwError} from 'rxjs'
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import {catchError} from 'rxjs/operators'
import {Router} from '@angular/router'
import { ConfigService } from './config.service'

@Injectable()
export class EventService {

  constructor(
        private config: ConfigService,
        private http: HttpClient
  ) { }

  getEventList(requestParam:any): Observable<any> {
    const url = `${this.config.ticketMasterUrl}/events`
    const params = this.buildRequestParams()

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

  private buildRequestParams(requestParam: any = null): HttpParams {
    let params = new HttpParams()

    if (requestParam) {
      if (requestParam.page)
        params = params.append('page', requestParam.page)

      if (requestParam.searchTerm)
        params = params.append('searchterm', requestParam.searchTerm)

      if (requestParam.pageSize)
        params = params.append('pagesize', requestParam.pageSize)

      if (requestParam.filterFleetStatus)
        params = params.append('filterfleetstatus', requestParam.filterFleetStatus)
    }

    return params
  }
}
