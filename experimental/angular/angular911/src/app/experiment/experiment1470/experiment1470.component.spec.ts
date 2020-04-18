import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1470Component } from './experiment1470.component';

describe('Experiment1470Component', () => {
  let component: Experiment1470Component;
  let fixture: ComponentFixture<Experiment1470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
