import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Employee } from '../shared/model/employee.model';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {
  private employee;

  constructor(
    private employeeService : EmployeeService
  ) {}

  ngOnInit() {
    this.employee = this.employeeService.getSelectedEmployee()
      .subscribe(data => this.employee = data);
  }

}
