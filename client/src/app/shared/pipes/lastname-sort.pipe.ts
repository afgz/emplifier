import { Pipe, PipeTransform } from '@angular/core';

import { Employee } from '../model/employee.model';

@Pipe({
  name: 'lastnameSort'
})
export class LastnameSortPipe implements PipeTransform {

  transform(employees: Employee[], order: string): Employee[] {
    if (order === 'ascending') {
      console.log(employees);
      return employees.sort((a,b) => {
        if (a.lastName > b.lastName || a.firstName > b.firstName) {
          return 1;
        } else if (a.lastName < b.lastName || a.firstName < b.firstName) {
          return -1;
        }
        return 0;
      });
    } else if (order === 'descending'){
      console.log('descending');
      return employees.sort((a,b) => {
        if (a.lastName > b.lastName || a.firstName > b.firstName) {
          return -1;
        } else if (a.lastName < b.lastName || a.firstName < b.firstName) {
          return 1;
        }
        return 0;
      });
    }
  }

}
