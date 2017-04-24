import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';

import { Employee } from '../model/employee.model';

@Injectable()
export class EmployeeService {
  private serverURL;
  private selectedEmployee: BehaviorSubject<Employee>;
  private employees: BehaviorSubject<Employee[]>;
  private employeeStore: Employee[];

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
        this.employeeStore = data;
        this.employees.next(this.employeeStore);
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

  post(employee) {
    let body = JSON.stringify(employee);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.serverURL, body, options)
      .map(response => response.json())
      .subscribe(data => {
        if (employee.id == null) {
          this.employeeStore.push(data);
        } else {
          this.employeeStore.forEach((emp, i) => {
            if (emp.id === employee.id) {
              this.employeeStore[i] = data;
              console.log("update");
            }
          })
        }
        this.employees.next(this.employeeStore);
      });
  }

  delete(empId) {
    this.http.delete(this.serverURL)
      .subscribe(response => {
        this.employeeStore.forEach((emp, i) => {
          if (emp.id === empId) {
            this.employeeStore.splice(i, 1);
          }
        });
        this.employees.next(this.employeeStore);
      })
  }
}
