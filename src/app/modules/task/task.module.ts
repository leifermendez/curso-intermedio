import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { DetailTaskComponent } from './components/detail-task/detail-task.component';
import { CardTaskComponent } from './components/card-task/card-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListTaskComponent,
    DetailTaskComponent,
    CardTaskComponent,
    AddTaskComponent
  ],
    imports: [
        CommonModule,
        TaskRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class TaskModule { }
