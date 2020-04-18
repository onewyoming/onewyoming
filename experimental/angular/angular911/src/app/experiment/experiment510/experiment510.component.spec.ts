import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment510Component } from './experiment510.component';

describe('Experiment510Component', () => {
  let component: Experiment510Component;
  let fixture: ComponentFixture<Experiment510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
