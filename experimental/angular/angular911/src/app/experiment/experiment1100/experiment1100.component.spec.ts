import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1100Component } from './experiment1100.component';

describe('Experiment1100Component', () => {
  let component: Experiment1100Component;
  let fixture: ComponentFixture<Experiment1100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
