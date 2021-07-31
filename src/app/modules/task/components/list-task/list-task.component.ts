import {TaskService} from './../../services/task.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomService} from "../../../../shared/services/custom.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit, OnDestroy {

  listTask: Array<any> = []
  listSubs$: Array<Subscription> = []

  constructor(private taskService: TaskService, public customService: CustomService) {
  }

  ngOnInit(): void {
    this.taskService.getTask()
      .subscribe(res => { //TODO: HttpClient <--- Angular, Activate Route NOT se necesita unsubscribe
        this.listTask = res;
        console.log('__RESPUESTA__', res);
        },
        err => {
          console.log('___ERROR__', err)
        })

    this.listenSub()
  }

  listenSub(): void {
    const observer1$ = this.customService.change$.subscribe(res => { //TODO: Si se debe unsubscribe
      //Aqui hacemos la logica
    })

    const observer2$ = this.customService.change$.subscribe(res => { //TODO: Si se debe unsubscribe
      //Aqui hacemos la logica
    })

    const observer3$ = this.customService.change$.subscribe(res => { //TODO: Si se debe unsubscribe
      //Aqui hacemos la logica
    })

    this.listSubs$ = [observer1$, observer2$, observer3$]
  }

  ngOnDestroy(): void {
    //TODO: se dispara cuando salimos de este compnente, justo antes
    this.listSubs$.forEach(sub => sub.unsubscribe())
    //TODO: Memory Le
  }
}
