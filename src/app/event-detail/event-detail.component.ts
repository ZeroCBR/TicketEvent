import {Component, OnDestroy, OnInit} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
import { TicketEvent } from '../core/models/event.model';
import { EventService } from '../core/services/event.service'

@Component({
  selector: 'event-detail',
  styleUrls: ['./event-detail.component.scss'],
  templateUrl: './event-detail.component.html'
})
export class EventDetailComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  event: TicketEvent; 

  constructor(private eventService:EventService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.eventService.getEventById(params['id']).subscribe(data=>{
        this.event = data
      })
    });
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }
}
