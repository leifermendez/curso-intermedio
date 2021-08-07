import {EventEmitter, Injectable, Output} from '@angular/core';
import {Socket} from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class HandleEventsService {
  @Output() callCard: EventEmitter<any> = new EventEmitter<any>();

  constructor(private socket:Socket) {
  }

  sendPing(card: any) {
    this.socket.emit('pingCard', card);
  }

  getPong() {
    return this.socket.fromEvent('pongCard')
  }
}
