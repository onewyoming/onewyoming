import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1964Component } from './experiment1964.component';

describe('Experiment1964Component', () => {
  let component: Experiment1964Component;
  let fixture: ComponentFixture<Experiment1964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
