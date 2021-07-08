import {Component} from '@angular/core'
import { TicketEvent } from '../core/models/event.model';
import { SearchParam } from '../core/models/search.model';
import { EventService } from '../core/services/event.service';

@Component({
  selector: 'event-list',
  styleUrls: ['./event-list.component.scss'],
  templateUrl: './event-list.component.html'
})
export class EventListComponent {
  events: TicketEvent[];

  constructor(private eventService:EventService) {
    this.createEventListSub()
  }

  search(searchParam: SearchParam){
    this.createEventListSub(searchParam)
  }

  createEventListSub(searchParam: SearchParam = null){
    this.eventService.getEventList(searchParam).subscribe(data=>{
      this.events = data._embedded.events;
    })
  }
}
