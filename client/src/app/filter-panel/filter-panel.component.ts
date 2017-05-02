import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EmployeeService } from '../shared/services/employee.service';
import { LocationService } from '../shared/services/location.service';
import { UIStateService } from '../shared/services/ui-state.service';
import { Employee } from '../shared/model/employee.model';
import { Location } from '../shared/model/location.model';
import { UIState } from '../shared/model/ui-state.model';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {
  private employees$ : Observable<Employee[]>;
  private locations$ : Observable<Location[]>;
  private state : UIState;
  private selectedLocation : String;

  constructor(
    private employeeService : EmployeeService,
    private locationService : LocationService,
    private stateService : UIStateService,
  ) { }

  ngOnInit() {
    this.employees$ = this.employeeService.get();
    this.locations$ = this.locationService.get();
    this.stateService.get()
      .subscribe(data => this.state = data);
  }

  toggleSearchBar() {
    this.stateService.toggleSearchBar();
  }


  filterAll() {
    this.stateService.setGender(null);
  }

  filterMale() {
    this.stateService.setGender('male');
  }

  filterFemale() {
    this.stateService.setGender('female')
  }

  sortAscending() {
    this.stateService.setSortOrder('asc');
  }

  sortDescending() {
    this.stateService.setSortOrder('desc');
  }

  filterLocation(location) {
    this.stateService.setLocation(location);
  }

}
