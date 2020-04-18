import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1414Component } from './experiment1414.component';

describe('Experiment1414Component', () => {
  let component: Experiment1414Component;
  let fixture: ComponentFixture<Experiment1414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
