import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { EmployeeService } from '../shared/services/employee.service';
import { LocationService } from '../shared/services/location.service';
import { Employee } from '../shared/model/employee.model';
import { Location } from '../shared/model/location.model';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})

export class EmpFormComponent implements OnInit {
  @Input() employee = new Employee;
  private locations : Location[];
  private form;

  constructor(
    private employeeService : EmployeeService,
    private locationService : LocationService,
    private formBuilder : FormBuilder,
    private router : Router
  ) {}

  ngOnInit() {

    this.locationService.get()
      .subscribe(response => this.locations = response);

    this.form = this.formBuilder.group({

      id: this.formBuilder.control(''),
      firstName: this.formBuilder.control(''),
      lastName: this.formBuilder.control(''),
      gender: this.formBuilder.control(''),
      dob: this.formBuilder.control(''),
      nationality: this.formBuilder.control(''),
      maritalStatus: this.formBuilder.control(''),
      phone: this.formBuilder.control(''),
      locationId: this.formBuilder.control(''),
      subDivision: this.formBuilder.control(''),
      status: this.formBuilder.control(''),
      suspendDate: this.formBuilder.control(''),
      hiredDate: this.formBuilder.control(''),
      grade: this.formBuilder.control(''),
      division: this.formBuilder.control(''),
      email: this.formBuilder.control('')

    });
  }

  add(employee) {
    this.employeeService.post(employee);
  }

}
