import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
  private employees;
  private serverURL;

  constructor(private http: Http) {
    this.serverURL = '/api/employees/'
    this.employees = [
      {
        id: 1,
        firstName: "Muhammad Ramziadh",
        lastName: "Afgeshza",
        gender: "Male",
        dob: 769453200000,
        nationality: "Indonesian",
        maritalStatus: "Single",
        phone: "087878000765",
        subDivision: "Java BootCamp",
        Status: "Contract",
        suspendDate: null,
        contractDate: 1294166565384,
        grade: "SE-PG",
        division: "CDC AsteRx",
        email: "afgeshza@gmail.com",
        imageUrl: ""
      },
      {
        id: 2,
        firstName: "Muhammad Ramziadh",
        lastName: "Afgeshza",
        gender: "Male",
        dob: 769453200000,
        nationality: "Indonesian",
        maritalStatus: "Single",
        phone: "087878000765",
        subDivision: "Java BootCamp",
        Status: "Contract",
        suspendDate: null,
        contractDate: 1294166565384,
        grade: "SE-PG",
        division: "CDC AsteRx",
        email: "afgeshza@gmail.com",
        imageUrl: ""
      },
      {
        id: 3,
        firstName: "Muhammad Ramziadh",
        lastName: "Afgeshza",
        gender: "Male",
        dob: 769453200000,
        nationality: "Indonesian",
        maritalStatus: "Single",
        phone: "087878000765",
        subDivision: "Java BootCamp",
        Status: "Contract",
        suspendDate: null,
        contractDate: 1294166565384,
        grade: "SE-PG",
        division: "CDC AsteRx",
        email: "afgeshza@gmail.com",
        imageUrl: ""
      }];
  }

  get() {
    return this.http.get(this.serverURL, {})
      .map(response => {
        return response.json().employees;
      });
  }

  
}
