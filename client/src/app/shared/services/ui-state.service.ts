import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';

import { UIState } from '../model/ui-state.model';

@Injectable()
export class UIStateService {
  private states: BehaviorSubject<UIState>;
  private _states: UIState;

  constructor() {
    this.states = new BehaviorSubject<UIState>(new UIState());
    this.init();
  }

  init() {
    this._states = {
      "searchBar" : null,
      "addForm" : null,
      "searchQuery" : "",
      "sortOrder" : "asc",
      "filter" : {
        "gender" : null,
        "location" : null
      },
      "notification" : ""
    }
    this.states.next(this._states);
  }

  get() {
    return this.states.asObservable();
  }

  toggleAddForm(args) {
    this._states.addForm = args;
    this.states.next(this._states);
  }

  toggleSearchBar() {
    this._states.searchQuery = "";
    this._states.searchBar = (this._states.searchBar === null ? 'show' : null);
    this.states.next(this._states);
  }

  setGender(gender) {
    this._states.filter.gender = gender;
    this.states.next(this._states);
  }

  setLocation(location) {
    this._states.filter.location = location;
    this.states.next(this._states);
  }

  setSortOrder(sortOrder) {
    this._states.sortOrder = sortOrder;
    this.states.next(this._states);
  }

  setSearchQuery(searchQuery) {
    this._states.searchQuery = searchQuery;
    this.states.next(this._states);
  }

  setNotification(notification) {
    this._states.notification = notification;
    this.states.next(this._states);

    setTimeout(
      this._states.notification = ''
    ), 3000;
    this.states.next(this._states);
  }

}
