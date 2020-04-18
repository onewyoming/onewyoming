import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1387Component } from './experiment1387.component';

describe('Experiment1387Component', () => {
  let component: Experiment1387Component;
  let fixture: ComponentFixture<Experiment1387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
