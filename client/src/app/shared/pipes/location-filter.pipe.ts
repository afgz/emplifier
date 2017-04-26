import { Pipe, PipeTransform } from '@angular/core';

import { Employee } from '../model/employee.model';

@Pipe({
  name: 'locationFilter',
  pure: false
})
export class LocationFilterPipe implements PipeTransform {

  transform(employees: Employee[], location: string): Employee[] {
    
    if (!location) {
      return employees;
    }
    return employees.filter(employee => employee.locationId.toLowerCase() == location);
  }

}
