import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1230Component } from './experiment1230.component';

describe('Experiment1230Component', () => {
  let component: Experiment1230Component;
  let fixture: ComponentFixture<Experiment1230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
