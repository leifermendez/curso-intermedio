import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.cookieService.get('token')
    let originUrl = request.url.split('//')
    originUrl.shift()
    const originRaw: string = originUrl.join('').split('/').shift() || ''

    const listOrigins = environment.listOrigins;

    if (listOrigins.includes(originRaw) && token) {
      console.log('Este enpoint es de ORIGEN', originRaw)
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      })
    }


    console.log('_::::::::::::___', request)
    return next.handle(request);
  }
}
