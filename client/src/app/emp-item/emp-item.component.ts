import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-item',
  templateUrl: './emp-item.component.html',
  styleUrls: ['./emp-item.component.css']
})
export class EmpItemComponent implements OnInit {
  private employees;

  constructor(
    private employeeService : EmployeeService
  ) {}

  ngOnInit() {
      this.employees = this.employeeService.get();
      console.log(this.employees);
  }

}
