import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Employee } from '../shared/model/employee.model';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {
  private employee : Employee;

  constructor(
    private employeeService : EmployeeService
  ) { }

  ngOnInit() {
    this.employee = new Employee;
  }

}
