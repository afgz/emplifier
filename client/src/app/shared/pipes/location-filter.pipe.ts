import { Pipe, PipeTransform } from '@angular/core';

import { Employee } from '../model/employee.model';
import { Location } from '../model/location.model';

@Pipe({
  name: 'locationFilter',
  pure: false
})
export class LocationFilterPipe implements PipeTransform {

  transform(employees: Employee[], location: Location): Employee[] {

    if (!location) {
      return employees;
    }
    return employees.filter(employee => employee.locationId.id === location.id);
  }

}
