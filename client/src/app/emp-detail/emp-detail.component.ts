import { Component, OnInit, Input } from '@angular/core';

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
    this.employeeService.getSelectedEmployee()
      .subscribe(data => {
        this.employee = data;
        console.log(this.employee);
      });
  }

}
