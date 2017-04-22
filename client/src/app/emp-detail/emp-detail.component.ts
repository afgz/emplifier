import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';
import { LocationService } from '../shared/services/location.service';
import { Employee } from '../shared/model/employee.model';
import { Location } from '../shared/model/location.model';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {
  @Input() employee;
  private locations : Location[];

  constructor(
    private employeeService : EmployeeService,
    private locationService : LocationService
  ) {}

  ngOnInit() {
    this.locationService.get()
      .subscribe(response => this.locations=response);
  }

}
