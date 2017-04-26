import { Component } from '@angular/core';

import { UIStateService } from '../shared/services/ui-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private stateService : UIStateService
  ) { }

  toggleAddForm() {
    this.stateService.toggleAddForm();
  }

  toggleSearchBar() {
    this.stateService.toggleSearchBar();
  }

  filterAll() {
    this.stateService.setGender('');
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

}
