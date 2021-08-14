import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from 'src/app/core/models/register-user';
import {tap} from "rxjs/operators";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookieService:CookieService) { }

  public login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.api}/auth/login`, {
      email,
      password
    }).pipe(tap((data:any) => {
      const {tokenObject} = data
        this.cookieService.put('token',tokenObject.token,{
          expires:tokenObject.expire
        })

    }))
  }

  public register(data: RegisterUser): Observable<any> {
    return this.http.post(`${environment.api}/auth/login`, data)
  }
}
