import { Component, OnInit, ViewChildren, ElementRef, Input, Inject, ViewContainerRef  } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MdSnackBar, MdDialogRef, MdDialogConfig, MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { EmployeeService } from '../shared/services/employee.service';
import { LocationService } from '../shared/services/location.service';
import { UIStateService } from '../shared/services/ui-state.service';
import { ValidationService } from '../shared/services/validation.service';
import { Employee } from '../shared/model/employee.model';
import { Location } from '../shared/model/location.model';
import { UIState } from '../shared/model/ui-state.model';
import { lookupListToken } from '../shared/providers';
import { DialogComponent } from '../dialog/dialog.component'

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})

export class EmpFormComponent implements OnInit {
  private employee : Employee;
  @ViewChildren('fileInput') fileInput;
  private locations$ : Observable<Location[]>;
  private form;
  private reader;
  private avatar;
  private dialogRef : MdDialogRef<any>;
  private viewContainerRef : ViewContainerRef;

  constructor(
    @Inject(lookupListToken) public lookupLists,
    private employeeService : EmployeeService,
    private locationService : LocationService,
    private stateService : UIStateService,
    private validationService : ValidationService,
    private formBuilder : FormBuilder,
    private snackbar : MdSnackBar,
    private dialog : MdDialog
  ) {}

  ngOnInit() {
    this.stateService.get()
      .subscribe(states => this.employee = states.addForm);

    if (!this.employee.photo) {
      this.avatar = "../../assets/default.png";
    } else {
      this.avatar = this.employee.photo;
    }
    this.locations$ = this.locationService.get();
    this.reader = new FileReader();
    this.form = this.formBuilder.group({

      photo: this.formBuilder.control(''),
      id: this.formBuilder.control(''),
      firstName: this.formBuilder.control('', [Validators.required, ValidationService.nameValidator]),
      lastName: this.formBuilder.control('', [Validators.required, ValidationService.nameValidator]),
      gender: this.formBuilder.control('', Validators.required),
      dob: this.formBuilder.control('', [Validators.required, ValidationService.dateValidator]),
      nationality: this.formBuilder.control('', Validators.required),
      maritalStatus: this.formBuilder.control('', Validators.required),
      phone: this.formBuilder.control('', [Validators.required, ValidationService.phoneValidator]),
      locationId: this.formBuilder.control('', Validators.required),
      subDivision: this.formBuilder.control('', Validators.required),
      status: this.formBuilder.control('', Validators.required),
      suspendDate: this.formBuilder.control('', ValidationService.dateValidator),
      hiredDate: this.formBuilder.control('', [Validators.required, ValidationService.dateValidator]),
      grade: this.formBuilder.control('', Validators.required),
      division: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', [Validators.required, ValidationService.emailValidator])

    });
  }

  ngOnChanges() {
    if (this.fileInput) {
      this.fileInput._results[0].nativeElement.value = '';
    }
    this.avatar = this.employee.photo;
  }

  add(employee) {
    let location: Location = {
      "id": employee.locationId,
      "city": this.lookupLists.cities[employee.locationId]
    }
    employee.locationId = location;
    employee.photo = this.avatar;

    if (!employee.suspendDate) {
      this.employeeService.save(employee);
      this.stateService.toggleAddForm(null);
      if (!employee.id) {
        this.snackbar.open(employee.firstName+" "+employee.lastName+" created.", 'DISMISS', {
          duration: 5000,
        });
      } else {
        this.snackbar.open(employee.firstName+" "+employee.lastName+" updated.", 'DISMISS', {
          duration: 5000,
        });
      }
    } else {
      let config = new MdDialogConfig();
      config.viewContainerRef = this.viewContainerRef;
      this.dialogRef = this.dialog.open(DialogComponent, config);
      this.dialogRef.componentInstance.message = "You will make this employee inactive by defining the suspend date. Are you sure?";

      this.dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.employeeService.save(employee);
          this.stateService.toggleAddForm(null);
          if (!employee.id) {
            this.snackbar.open(employee.firstName+" "+employee.lastName+" created.", 'CLOSE', {
              duration: 5000,
            });
          } else {
            this.snackbar.open(employee.firstName+" "+employee.lastName+" updated.", 'CLOSE', {
              duration: 5000,
            });
          }
        }
      });

    }

  }

  cancel() {
    this.stateService.toggleAddForm(null);
  }

  onSelectPhoto(fileInput) {
    this.reader.onload = ((input:any) => this.avatar = input.target.result)
    this.reader.readAsDataURL(fileInput.target.files[0]);
  }

}
