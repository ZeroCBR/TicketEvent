import {TestBed} from '@angular/core/testing';
import {ConfigService} from './config.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';
import { EventService } from './event.service';
import { SearchParam } from '../models/search.model';

describe('event service', () => {
  const ticketMasterUrl = environment.ticketMasterUrl;
  let eventService: EventService;
  let configService: ConfigService;
  let httpTestingController: HttpTestingController;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventService,
        ConfigService
      ],
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    eventService = TestBed.inject(EventService);
    configService = TestBed.inject(ConfigService);
    spy = spyOnProperty(configService, 'ticketMasterUrl', 'get').and.returnValue(ticketMasterUrl);
  });

  it('should be created', () => {
    expect(eventService).toBeTruthy();
  });

  it('happy path', () => {
    const searchParam: SearchParam = {
      id: 'stub-id',
      keyword: 'stub-keyword',
      size: '30',
      page: '5'
    };

    eventService.getEventList(searchParam).subscribe();
    const queryParam = Object.entries(searchParam).map(pair => `${pair[0]}=${pair[1]}`).join('&');

    httpTestingController.expectOne({method: 'GET', url: `${ticketMasterUrl}/events?${queryParam}`});
  });
});
