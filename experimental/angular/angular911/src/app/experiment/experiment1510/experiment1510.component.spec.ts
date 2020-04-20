import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1510Component } from './experiment1510.component';

describe('Experiment1510Component', () => {
  let component: Experiment1510Component;
  let fixture: ComponentFixture<Experiment1510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
