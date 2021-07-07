import {Component} from '@angular/core'
import { TicketEvent } from '../core/models/event.model';
import { EventService } from '../core/services/event.service';

@Component({
  selector: 'event-list',
  styleUrls: ['./event-list.component.scss'],
  templateUrl: './event-list.component.html'
})
export class EventListComponent {
  events: TicketEvent[];

  constructor(private eventService:EventService) {
    this.eventService.getEventList(null).subscribe(data=>{
      this.events = data._embedded.events;
    })
  }
}
