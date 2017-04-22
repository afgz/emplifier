import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Employee } from '../model/employee.model';

@Injectable()
export class EmployeeService {
  private employees;
  private serverURL;

  constructor(private http: Http) {
    this.serverURL = '/api/employees/';
  }

  get() : Observable<Employee[]> {
    return this.http.get(this.serverURL)
      .map(response => response.json());
  }
  
  post(employee) : Observable<Employee> {
    let body = JSON.stringify(employee);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.serverURL, body, options)
      .map(response => response.json());
  }


}
