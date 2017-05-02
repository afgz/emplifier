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

}
