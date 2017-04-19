import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpItemComponent } from './emp-item.component';

describe('EmpItemComponent', () => {
  let component: EmpItemComponent;
  let fixture: ComponentFixture<EmpItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
