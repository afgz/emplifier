import { Injectable } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';

import { UIState } from '../model/ui-state.model';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';

@Injectable()
export class UIStateService {
  private states: BehaviorSubject<UIState>;
  private _states: UIState;
  private dialog: MdDialog;

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
        "gender" : "",
        "location" : ""
      },
      "notification" : ""
    }
    this.states.next(this._states);
  }

  get() {
    return this.states.asObservable();
  }

  toggleAddForm() {
    this._states.addForm = (this._states.addForm === null ? 'show' : null);
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

  confirmDelete(title, message) : Observable<boolean> {
    debugger;
    let dialogRef: MdDialogRef<DeleteDialogComponent>;

    dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }

}
