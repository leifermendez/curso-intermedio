import { TaskService } from '@modules/task/services/task.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CustomService } from "@sharedFile/services/custom.service";
import { Subscription } from "rxjs";
import { HandleEventsService } from "@modules/task/services/handle-events.service";
import { CardData } from "@core/models/card-data";
import {BsModalService} from "ngx-bootstrap/modal";
import {AddTaskComponent} from "@modules/task/components/add-task/add-task.component";

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit, OnDestroy {
  // @HostListener('document:scroll', ['$event'])
  // handleScroll(event: any): void {
  //   console.log(event)
  // }

  @HostListener('click', ['$event'])
  handleClick(event: any): void {
    const listPath = event.path.map((a: any) => a.className)
    if (!listPath.includes('card-wrapper')) {
      this.sendEvent(false)
      console.log('_NOT_ESTAMOS_EN_CARD')
    }
  }

  listTask: CardData[] = [];
  listSubs$: Array<Subscription> = []

  constructor(public taskService: TaskService, public customService: CustomService,
    private handleEventsService: HandleEventsService, private bsModalService:BsModalService) {
  }

  ngOnInit(): void {
    this.taskService.getTask()
      .subscribe(({data}) => { //TODO: HttpClient <--- Angular, Activate Route NOT se necesita unsubscribe
        this.listTask = data;
      },
        err => {
          console.log('___ERROR__', err)
        })

    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.taskService.triggerModal.subscribe(data => {
      //ignoreBackdropClick
      this.bsModalService.show(AddTaskComponent,
        {
          initialState,
          ignoreBackdropClick:true
        })
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

  sendEvent(dataIn: boolean): void {
    this.handleEventsService.callCard.emit(dataIn)
  }

  ngOnDestroy(): void {
    //TODO: se dispara cuando salimos de este compnente, justo antes
    this.listSubs$.forEach(sub => sub.unsubscribe())
    //TODO: Memory Le
  }
}
