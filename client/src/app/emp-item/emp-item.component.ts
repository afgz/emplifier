import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { EmployeeService } from '../shared/services/employee.service';
import { LocationService } from '../shared/services/location.service';
import { UIStateService } from '../shared/services/ui-state.service';
import { Employee } from '../shared/model/employee.model';
import { Location } from '../shared/model/location.model';
import { UIState } from '../shared/model/ui-state.model';

@Component({
  selector: 'app-emp-item',
  templateUrl: './emp-item.component.html',
  styleUrls: ['./emp-item.component.css'],
  animations: [
    trigger('cardState', [
      state('*', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('void', style({
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition('* <=> void', animate('300ms ease-in-out'))
    ])
  ]
})

export class EmpItemComponent implements OnInit {
  private employees$ : Observable<Employee[]>;
  private locations$ : Observable<Location[]>;
  private state$ : Observable<UIState>;
  private selectedLocation : String;
  private selectedEmployeeID : Employee;
  private result;


  constructor(
    private employeeService : EmployeeService,
    private locationService : LocationService,
    private stateService : UIStateService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) {}

  ngOnInit() {
    this.employees$ = this.employeeService.get();
    this.locations$ = this.locationService.get();
    this.state$ = this.stateService.get();
  }

  onSelect(employee) {
    this.selectedEmployeeID = employee.id;
    this.employeeService.selectEmployee(employee);
  }

  onDelete(empId) {
    this.stateService
      .confirmDelete('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe(res => {
        this.result = res;
        
      });
      
    // this.employeeService.delete(empId);
  }

  filterCity(args) {
    this.stateService.setLocation(args.value);
  }

}
