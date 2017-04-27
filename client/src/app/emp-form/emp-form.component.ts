import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { EmployeeService } from '../shared/services/employee.service';
import { LocationService } from '../shared/services/location.service';
import { UIStateService } from '../shared/services/ui-state.service';
import { ValidationService } from '../shared/services/validation.service';
import { Employee } from '../shared/model/employee.model';
import { Location } from '../shared/model/location.model';
import { UIState } from '../shared/model/ui-state.model';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})

export class EmpFormComponent implements OnInit {
  @Input() employee : Employee;
  private locations : Observable<Location[]>;
  private form;

  constructor(
    private employeeService : EmployeeService,
    private locationService : LocationService,
    private stateService : UIStateService,
    private validationService : ValidationService,
    private formBuilder : FormBuilder
  ) {}

  ngOnInit() {
    this.locations = this.locationService.get();

    this.form = this.formBuilder.group({

      imageUrl: this.formBuilder.control(''),
      id: this.formBuilder.control(''),
      firstName: this.formBuilder.control('', [Validators.required, ValidationService.nameValidator]),
      lastName: this.formBuilder.control('', [Validators.required, ValidationService.nameValidator]),
      gender: this.formBuilder.control('', Validators.required),
      dob: this.formBuilder.control('', Validators.required),
      nationality: this.formBuilder.control('', [Validators.required, ValidationService.nationalityValidator]),
      maritalStatus: this.formBuilder.control('', Validators.required),
      phone: this.formBuilder.control('', [Validators.required, ValidationService.phoneValidator]),
      locationId: this.formBuilder.control('', Validators.required),
      subDivision: this.formBuilder.control('', Validators.required),
      status: this.formBuilder.control('', Validators.required),
      suspendDate: this.formBuilder.control(''),
      hiredDate: this.formBuilder.control('', Validators.required),
      grade: this.formBuilder.control('', Validators.required),
      division: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', [Validators.required, ValidationService.emailValidator])

    });
  }

  add(employee) {
    this.employeeService.save(employee);
  }

  cancel() {
    this.stateService.toggleAddForm();
  }

  onSelectPhoto(fileInput) {
    let name = fileInput.target.files[0].name;
    let photo = fileInput.target.files[0];
  }

}
