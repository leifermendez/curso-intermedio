import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) {

  }

  getProjects():Observable<any> {
    return this.http.get(`${environment.api}/posts?limit=10`)
  }
}
