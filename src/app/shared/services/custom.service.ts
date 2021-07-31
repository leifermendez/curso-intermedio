import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomService {
  sidebarFlag = false
  change: BehaviorSubject<any> = new BehaviorSubject<boolean>(false);
  change$ = this.change.asObservable();

  constructor() {
  }

  changeData(): any {
    this.sidebarFlag = !this.sidebarFlag;
    this.change.next(this.sidebarFlag)
  }

}
