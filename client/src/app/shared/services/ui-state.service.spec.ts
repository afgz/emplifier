import { TestBed, inject } from '@angular/core/testing';

import { UiStateService } from './ui-state.service';

describe('UIStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UIStateService]
    });
  });

  it('should ...', inject([UiStateService], (service: UiStateService) => {
    expect(service).toBeTruthy();
  }));
});
