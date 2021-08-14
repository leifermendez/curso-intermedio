import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CookieService} from "ngx-cookie";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router,
              private http: HttpClient) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verifyToken(); //TODO: todo el mundo tiene acceso
  }

  verifyToken(): Observable<any> {
    return this.http.get(`${environment.api}/auth/verify`)
      .pipe(
        catchError(() => {
          this.router.navigate(['/','auth','login'])
          return of([])
        }),
        map(({data}: any) => {
          return (['user'].includes(data?.role)) //TODO: true o false
        })
      )
  }

}
