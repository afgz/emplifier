import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs/Observable';

import { UIStateService } from './shared/services/ui-state.service';
import { UIState } from './shared/model/ui-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('searchBarState', [
      state('show', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('void', style({
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition('* <=> void', animate('300ms ease-in-out'))
    ]),
    trigger('addFormState', [
      state('show', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('void', style({
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition('* <=> void', animate('300ms ease-in-out'))
    ]),
    trigger('wrapperState', [
      state('show', style({
        opacity: .87
      })),
      state('void', style({
        opacity: 0
      })),
      transition('* <=> void', animate('300ms ease-in-out'))
    ]),
  ]
})
export class AppComponent implements OnInit {
  private selectedEmployee;
  private state : UIState;

  private addForm = null;
  private searchBar = null;

  constructor(
    private stateService : UIStateService
  ) {}

  ngOnInit() {
    this.stateService.get()
      .subscribe(data => this.state = data);
  }

  toggleAddForm() {
    this.stateService.toggleAddForm();
  }

  toggleSearchBar() {
    this.stateService.toggleSearchBar();
  }

  onType(search) {
    this.stateService.setSearchQuery(search.value);
  }

  filterAll() {
    this.stateService.setGender('');
  }

  filterMale() {
    this.stateService.setGender('male');
  }

  filterFemale() {
    this.stateService.setGender('female')
  }

  sortAscending() {
    this.stateService.setSortOrder('asc');
  }

  sortDescending() {
    this.stateService.setSortOrder('desc');
  }
}
