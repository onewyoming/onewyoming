import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment383Component } from './experiment383.component';

describe('Experiment383Component', () => {
  let component: Experiment383Component;
  let fixture: ComponentFixture<Experiment383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
