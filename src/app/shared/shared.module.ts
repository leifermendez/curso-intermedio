import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TransforTextPipe } from './pipe/transfor-text.pipe';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    TransforTextPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
