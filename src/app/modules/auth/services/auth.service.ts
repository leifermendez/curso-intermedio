import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from 'src/app/core/models/register-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.api}/login`, {
      email,
      password
    })
  }

  public register(data: RegisterUser): Observable<any> {
    return this.http.post(`${environment.api}/register`, data)
  }
}
