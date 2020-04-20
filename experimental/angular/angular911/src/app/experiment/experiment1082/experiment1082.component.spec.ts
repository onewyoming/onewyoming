import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1082Component } from './experiment1082.component';

describe('Experiment1082Component', () => {
  let component: Experiment1082Component;
  let fixture: ComponentFixture<Experiment1082Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1082Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
