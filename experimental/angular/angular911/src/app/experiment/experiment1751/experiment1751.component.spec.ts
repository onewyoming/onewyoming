import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1751Component } from './experiment1751.component';

describe('Experiment1751Component', () => {
  let component: Experiment1751Component;
  let fixture: ComponentFixture<Experiment1751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
