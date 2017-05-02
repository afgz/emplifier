import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { MdDialogRef, MdDialog, MdDialogConfig, MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { DialogComponent } from '../dialog/dialog.component';
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
    trigger('deleteState', [
      state(
        '*', style({ opacity: '1', transform: 'scale(1)' })
      ),
      transition('void => *', [
        animate(150, keyframes([
          style({opacity: 0, transform: 'scale(0.5)', offset: 0}),
          style({opacity: 1, transform: 'scale(1.1)', offset: 0.5}),
          style({opacity: 1, transform: 'scale(1.0)', offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(100, keyframes([
          style({opacity: 1, transform: 'scale(1.0)', offset: 0}),
          style({opacity: 0, transform: 'scale(0.5)', offset: 1})
        ]))
      ])
    ])
  ]
})

export class EmpItemComponent implements OnInit {
  private newEmployee : Employee;
  private employees$ : Observable<Employee[]>;
  private locations$ : Observable<Location[]>;
  private state$ : Observable<UIState>;
  private selectedLocation : String;
  private selectedEmployeeID : Employee;
  private dialogRef : MdDialogRef<any>;


  constructor(
    private employeeService : EmployeeService,
    private locationService : LocationService,
    private stateService : UIStateService,
    private dialog: MdDialog,
    private viewContainerRef: ViewContainerRef,
    private snackbar : MdSnackBar
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

  onDelete(employee) {
    let config = new MdDialogConfig();
    let name = employee.firstName+" "+employee.lastName;
    config.viewContainerRef = this.viewContainerRef;

    this.dialogRef = this.dialog.open(DialogComponent, config);

    this.dialogRef.componentInstance.message = "Are you sure you want to delete "+name+"?";

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackbar.open(name+" deleted.", 'DISMISS', {
          duration: 5000,
        });
        this.employeeService.delete(employee.id);
      }
    });

  }

  onType(search) {
    this.stateService.setSearchQuery(search.value);
  }
}
