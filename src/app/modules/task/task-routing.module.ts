import { DetailTaskComponent } from './components/detail-task/detail-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', //TODO: localhost/task
    component: ListTaskComponent
  },
  {
    path: ':id', //TODO: localhost/task/454545454545454
    component: DetailTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
