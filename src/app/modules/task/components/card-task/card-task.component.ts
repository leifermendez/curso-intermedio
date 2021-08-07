import { Component, HostListener, Input, OnInit } from '@angular/core';
import { HandleEventsService } from "@modules/task/services/handle-events.service";
// import {HandleEventsService} from "@sharedFile/services/handle-events.service";
import { CardData } from "@core/models/card-data";

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.css']
})
export class CardTaskComponent implements OnInit {
  @Input() data: CardData = { title: '', description: '', tag: [], members: [], date: '', id: '' };
  openAll: boolean = false;
  focusCard: boolean = false;

  constructor(private handleEventsService: HandleEventsService) {
  }

  ngOnInit(): void {
    this.handleEventsService.callCard.subscribe(a => {
      this.openAll = a;
    })

    this.handleEventsService.getPong().subscribe((res: any) => {
      this.focusCard = (res.id === this.data.id);
    })
  }

  toggleCard(): void {
    this.handleEventsService.sendPing(this.data)
    // this.openAll = !this.openAll
    this.openAll = true
  }

}
