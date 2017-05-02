import { Component } from '@angular/core';

import { UIStateService } from '../shared/services/ui-state.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(
    private stateService : UIStateService
  ) { }

}
