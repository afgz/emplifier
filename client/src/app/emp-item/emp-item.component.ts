import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';
import { Employee } from '../shared/model/employee.model'

@Component({
  selector: 'app-emp-item',
  templateUrl: './emp-item.component.html',
  styleUrls: ['./emp-item.component.css']
})
export class EmpItemComponent implements OnInit {
  @Output() show = new EventEmitter();
  private employees : Array<Employee>;

  constructor(
    private employeeService : EmployeeService
  ) {}

  ngOnInit() {
      this.employeeService.get()
        .subscribe(response => this.employees=response);
  }

  onSelect(employee) {
    this.show.emit(employee);
  }

}
