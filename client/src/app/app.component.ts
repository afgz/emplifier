import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
export class AppComponent {
  private selectedEmployee;
  private addForm = null;
  private searchBar = null;

  toggleAddForm() {
    this.addForm = (this.addForm === null ? 'show' : null);
  }

  toggleSearchBar() {
    this.searchBar = (this.searchBar === null ? 'show' : null);
  }

  onCancel() {
    this.addForm = null;
  }
}
