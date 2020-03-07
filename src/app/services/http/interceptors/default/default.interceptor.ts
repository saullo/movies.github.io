import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const params = new HttpParams()
      .set('api_key', '2514ecda5428e8777d54c1a05c92ebbf')
      .set('language', 'en-US')
      .set('region', 'us')
    const cloneRequest = request.clone({
      url: `https://api.themoviedb.org/3${request.url}`,
      params: params
    })
    return next.handle(cloneRequest);
  }
}
