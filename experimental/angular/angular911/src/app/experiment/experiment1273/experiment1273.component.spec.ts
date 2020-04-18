import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1273Component } from './experiment1273.component';

describe('Experiment1273Component', () => {
  let component: Experiment1273Component;
  let fixture: ComponentFixture<Experiment1273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
