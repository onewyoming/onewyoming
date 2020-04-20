import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1623Component } from './experiment1623.component';

describe('Experiment1623Component', () => {
  let component: Experiment1623Component;
  let fixture: ComponentFixture<Experiment1623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
