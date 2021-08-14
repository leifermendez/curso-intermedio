import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "@modules/task/services/task.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  list: Array<any> = []
  title: string = ''
  formAddTask: FormGroup = new FormGroup({})

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder, private taskService:TaskService) {
  }

  ngOnInit(): void {
    this.formAddTask = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

  save():void{
    const body = this.formAddTask.value
    this.taskService.saveTask(body)
      .subscribe(res => {
        this.bsModalRef.hide()
      })
  }

}
