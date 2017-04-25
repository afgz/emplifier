import { Pipe, PipeTransform } from '@angular/core';

import { Employee } from '../model/employee.model';

@Pipe({
  name: 'genderFilter'
})
export class GenderFilterPipe implements PipeTransform {

  transform(employees: Employee[], gender: string): Employee[] {
    if (employees == null) {
      return null;
    }

    return employees.filter(employee =>
      employee.gender.toLowerCase() === gender
    );
  }

}
