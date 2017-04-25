import { Pipe, PipeTransform } from '@angular/core';

import { Employee } from '../model/employee.model';

@Pipe({
  name: 'genderFilter'
})
export class GenderFilterPipe implements PipeTransform {

  transform(employees: Employee[], gender: string): Employee[] {
    return employees.filter(employee =>
      employee.gender.toLowerCase() === gender
    );
  }

}
