import {environment} from './../../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  public getTask(): Observable<any> {
    return this.http.get(`${environment.apiFake}/task`)
      .pipe(
        map((list: any) => {
          return list.map((element: any) => {
            return {
              id: element.id,
              title: element.title,
              description: element.body,
              tag: element.tag,
              members: [
                {
                  name: 'Leifer',
                  img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                }
              ],
              date: '10 Nov'
            }
          })
        })
      )
  }
}

