import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSearchBarComponent } from './emp-search-bar.component';

describe('EmpSearchBarComponent', () => {
  let component: EmpSearchBarComponent;
  let fixture: ComponentFixture<EmpSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
