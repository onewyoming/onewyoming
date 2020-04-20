import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1426Component } from './experiment1426.component';

describe('Experiment1426Component', () => {
  let component: Experiment1426Component;
  let fixture: ComponentFixture<Experiment1426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
