import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../shared/services/employee.service';
import { LocationService } from '../shared/services/location.service';
import { Employee } from '../shared/model/employee.model';
import { Location } from '../shared/model/location.model';

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
  private employees : Employee[];
  private locations : Location[];
  private selectedLocation : String;
  private selectedEmployee : Employee;

  constructor(
    private employeeService : EmployeeService,
    private locationService : LocationService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) {}

  ngOnInit() {
    this.employeeService.get()
      .subscribe(data => this.employees = data);

    this.locationService.get()
      .subscribe(data => this.locations = data);
  }

  onSelect(employee) {
    this.employeeService.selectEmployee(employee);
  }

  filterCity(args) {
    this.router.navigate(['/'+args.value]);
  }

}
