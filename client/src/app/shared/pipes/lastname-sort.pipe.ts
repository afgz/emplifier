import { Pipe, PipeTransform } from '@angular/core';

import { Employee } from '../model/employee.model';

@Pipe({
  name: 'lastnameSort'
})
export class LastnameSortPipe implements PipeTransform {

  transform(employees: Employee[], order: string): Employee[] {
    
    if (!order) {
      console.log('no order');
      return employees;
    }

    if (order === 'asc') {
      return employees.sort((a,b) => {
        if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
          return 1;
        } else if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
          return -1;
        } else if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
          return 1;
        } else if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
          return -1;
        }
        return 0;
      });
    } else if (order === 'desc'){
      return employees.sort((a,b) => {
        if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
          return -1;
        } else if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
          return 1;
        } else if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
          return -1;
        } else if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    }
  }

}
