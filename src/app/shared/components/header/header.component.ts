import {Component, OnInit} from '@angular/core';
import {CustomService} from "../../services/custom.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems: Array<any> = [
    {
      name: `To-Do ${environment.nameApp}`,
      icon: 'uil uil-check-square',
      template: 'A',
      route:['/']
    },
    {
      name: 'Dashboard',
      icon: 'uil uil-create-dashboard',
      template: 'B',
      route:['/']
    },
    {
      name: 'List',
      icon: 'uil uil-clipboard-notes',
      template: 'A',
      route:['/','task']
    },
    {
      name: 'Profile',
      icon: 'uil uil-user',
      template: 'A',
      route:['/']
    }
  ]

  constructor(private customService: CustomService) {
  }

  ngOnInit(): void {
  }

  emitPipe(data:any): void {
  }

}
