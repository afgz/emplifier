import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Observable } from 'rxjs/Observable';

import { UIStateService } from './shared/services/ui-state.service';
import { UIState } from './shared/model/ui-state.model';
import { Employee } from './shared/model/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('addFormState', [
      state(
        '*', style({ opacity: '1', transform: 'scale(1)' })
      ),
      transition('void => *', [
        animate(200, keyframes([
          style({opacity: 0, transform: 'scale(0.8)', offset: 0}),
          style({opacity: 1, transform: 'scale(1.1)', offset: 0.5}),
          style({opacity: 1, transform: 'scale(1.0)', offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(200, keyframes([
          style({opacity: 1, transform: 'scale(1.0)', offset: 0}),
          style({opacity: 0, transform: 'scale(0.8)', offset: 1})
        ]))
      ])
    ]),
    trigger('wrapperState', [
      state('show', style({
        opacity: .87
      })),
      state('void', style({
        opacity: 0
      })),
      transition('* <=> void', animate('200ms ease-in-out'))
    ]),
  ]
})
export class AppComponent implements OnInit {
  private state$ : Observable<UIState>;
  private newEmployee : Employee;

  constructor(
    private stateService : UIStateService
  ) {}

  ngOnInit() {
    this.state$ = this.stateService.get();
    this.newEmployee = new Employee;
  }

  openForm() {
    this.stateService.toggleAddForm(this.newEmployee);
  }

  closeForm() {
    this.stateService.toggleAddForm(null);
  }
}
