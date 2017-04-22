import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'

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
  private form;

  constructor(
    private employeeService : EmployeeService,
    private locationService : LocationService,
    private formBuilder : FormBuilder
  ) {}

  ngOnInit() {
    this.locationService.get()
      .subscribe(response => this.locations=response);

    this.form = this.formBuilder.group({
      id: this.formBuilder.control(this.employee.id),
      firstName: this.formBuilder.control(this.employee.firstName),
      lastName: this.formBuilder.control(this.employee.lastName),
      gender: this.formBuilder.control(this.employee.gender),
      dob: this.formBuilder.control(this.employee.dob),
      nationality: this.formBuilder.control(this.employee.nationality),
      maritalStatus: this.formBuilder.control(this.employee.maritalStatus),
      phone: this.formBuilder.control(this.employee.phone),
      locationId: this.formBuilder.control(this.employee.locationId),
      subDivision: this.formBuilder.control(this.employee.subDivision),
      status: this.formBuilder.control(this.employee.status),
      suspendDate: this.formBuilder.control(this.employee.suspendDate),
      hiredDate: this.formBuilder.control(this.employee.hiredDate),
      grade: this.formBuilder.control(this.employee.grade),
      division: this.formBuilder.control(this.employee.division),
      email: this.formBuilder.control(this.employee.email),
    });
  }

  add(employee) {
    this.employeeService.post(employee)
      .subscribe(response => this.employee = response);
  }

}
