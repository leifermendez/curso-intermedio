import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  listTask: Array<any> = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask()
      .subscribe(res => {
        console.log('__RESPUESTA__', res);

      },
        err => {
          console.log('___ERROR__', err)
        })
  }

}
