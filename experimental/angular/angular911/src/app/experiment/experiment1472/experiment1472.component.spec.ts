import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1472Component } from './experiment1472.component';

describe('Experiment1472Component', () => {
  let component: Experiment1472Component;
  let fixture: ComponentFixture<Experiment1472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
