import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1405Component } from './experiment1405.component';

describe('Experiment1405Component', () => {
  let component: Experiment1405Component;
  let fixture: ComponentFixture<Experiment1405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
