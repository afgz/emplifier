import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';

import { Employee } from '../model/employee.model';
import { UIStateService } from './ui-state.service';

@Injectable()
export class EmployeeService  {
  private serverURL;
  private selectedEmployee: BehaviorSubject<Employee>;
  private employees: BehaviorSubject<Employee[]>;
  private _employees: Employee[];
  private stateService: UIStateService;

  constructor(private http: Http) {
    this.serverURL = '/api/employees/';
    this.employees = new BehaviorSubject<Employee[]>([]);
    this.selectedEmployee = new BehaviorSubject<Employee>(new Employee);
    this.load();
  }

  load() {
    this.http.get(this.serverURL)
      .map(response => response.json())
      .subscribe(data => {
        this._employees = data;
        this.employees.next(this._employees);
      });
  }

  get() {
    return this.employees.asObservable();
  }

  selectEmployee(employee) {
    this.selectedEmployee.next(employee);
  }

  getSelectedEmployee() {
    return this.selectedEmployee.asObservable();
  }

  save(employee) {
    let body = JSON.stringify(employee);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    if (!employee.id) {
      this.http.post(this.serverURL, body, options)
        .map(response => response.json())
        .subscribe(data => {
          this._employees.push(data);
          this.selectEmployee(data);
        })
    } else {
      this.http.put(this.serverURL, body, options)
        .map(response => response.json())
        .subscribe(data => this._employees
          .forEach((emp, i) => {
            if (emp.id === employee.id) {
              this._employees[i] = data;
              this.selectEmployee(data);
             }
          })
        )
    }
    this.employees.next(this._employees);
  }

  delete(empId) {
    this.http.delete(this.serverURL+empId)
      .subscribe(response => {
        this._employees.forEach((emp, i) => {
          if (emp.id === empId) {
            this._employees.splice(i, 1);
          }
        });
        this.employees.next(this._employees);
        this.selectedEmployee.next(new Employee);
      })
  }
}
