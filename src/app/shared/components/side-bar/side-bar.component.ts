import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../../services/projects.service";
import {CustomService} from "../../services/custom.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  tab: string = 'team_projects';
  projectList: Array<any> = []
  amount: number = 100;
  currentCurrency = 'USD';
  inSidebarFlag:boolean = false;
  constructor(private projectsService: ProjectsService, private customService: CustomService) {

  }

  ngOnInit(): void {
    this.loadSubs$();
    this.loadData()
  }

  loadSubs$(): void {
    this.customService.change$.subscribe(res => {
      console.log('___',res)
      this.inSidebarFlag = res;
    })
  }


  loadData(): void {
    this.projectsService.getProjects()
      .subscribe(res => this.projectList = res)
  }

  toggleSidebar(): void {
    this.customService.changeData()
  }

  changeTab(template: string): void {
    this.tab = template;
  }
}
