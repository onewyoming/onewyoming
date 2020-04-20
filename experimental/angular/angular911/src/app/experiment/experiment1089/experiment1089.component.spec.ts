import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1089Component } from './experiment1089.component';

describe('Experiment1089Component', () => {
  let component: Experiment1089Component;
  let fixture: ComponentFixture<Experiment1089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
