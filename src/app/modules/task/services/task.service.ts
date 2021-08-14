import {environment} from './../../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import {BsModalService} from "ngx-bootstrap/modal";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  triggerModal: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient, private modalService: BsModalService) {
  }

  public getTask(): Observable<any> {
    return this.http.get(`${environment.api}/task`)
  }

  public saveTask(body: any): Observable<any> {
    return this.http.post(`${environment.api}/task`, body)
  }

  public addTask(data: any): void {
    this.triggerModal.emit(data)
  }


}

