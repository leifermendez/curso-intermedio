import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithOutSessionGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const checkCookie = this.cookieService.get('token')
    const checkBoolean = (checkCookie === undefined);
    return  true
    // if (!checkBoolean) {
    //   //TODO: Redirecionar
    //   this.router.navigate(['/', 'task'])
    //   return false;
    // } else {
    //   return true
    // }
  }



}
