import {Component, EventEmitter, Output} from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'event-search',
  styleUrls: ['./event-search.component.scss'],
  templateUrl: './event-search.component.html'
})
export class EventSearchComponent {
  @Output() searchEmitter = new EventEmitter();
  searchForm: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      id: new FormControl(''),
      keyword: new FormControl(''),
      size: new FormControl(''),
      page: new FormControl('')
    }) 
  }

  onSubmit(): void {
    this.searchEmitter.emit(this.searchForm.value)
  }
}
