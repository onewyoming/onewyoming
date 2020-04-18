import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1487Component } from './experiment1487.component';

describe('Experiment1487Component', () => {
  let component: Experiment1487Component;
  let fixture: ComponentFixture<Experiment1487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
