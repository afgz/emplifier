import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';
import { Employee } from '../shared/model/employee.model'

@Component({
  selector: 'app-emp-item',
  templateUrl: './emp-item.component.html',
  styleUrls: ['./emp-item.component.css']
})
export class EmpItemComponent implements OnInit {
  private employee : Employee[];

  constructor(
    private employeeService : EmployeeService
  ) {}

  ngOnInit() {
      this.employeeService.get()
        .subscribe(employee => this.employee = employee);
      console.log(this.employee);
  }

}
