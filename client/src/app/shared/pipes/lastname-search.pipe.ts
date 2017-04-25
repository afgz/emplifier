import { Pipe, PipeTransform } from '@angular/core';

import { Employee } from '../model/employee.model';

@Pipe({
  name: 'lastnameSearch'
})
export class LastnameSearchPipe implements PipeTransform {

  transform(employees: Employee[], query: string): Employee[] {
    return employees.filter(employee =>
      employee.lastName.toLowerCase().includes(query)
    );
  }

}
