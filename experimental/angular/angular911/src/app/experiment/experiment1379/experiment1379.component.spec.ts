import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1379Component } from './experiment1379.component';

describe('Experiment1379Component', () => {
  let component: Experiment1379Component;
  let fixture: ComponentFixture<Experiment1379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
