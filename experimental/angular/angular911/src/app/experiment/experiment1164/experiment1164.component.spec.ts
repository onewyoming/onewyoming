import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1164Component } from './experiment1164.component';

describe('Experiment1164Component', () => {
  let component: Experiment1164Component;
  let fixture: ComponentFixture<Experiment1164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
