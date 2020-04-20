import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment164Component } from './experiment164.component';

describe('Experiment164Component', () => {
  let component: Experiment164Component;
  let fixture: ComponentFixture<Experiment164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
