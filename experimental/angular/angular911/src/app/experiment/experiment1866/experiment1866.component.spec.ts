import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1866Component } from './experiment1866.component';

describe('Experiment1866Component', () => {
  let component: Experiment1866Component;
  let fixture: ComponentFixture<Experiment1866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
