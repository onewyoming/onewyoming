import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1509Component } from './experiment1509.component';

describe('Experiment1509Component', () => {
  let component: Experiment1509Component;
  let fixture: ComponentFixture<Experiment1509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
