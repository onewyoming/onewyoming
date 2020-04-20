import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1065Component } from './experiment1065.component';

describe('Experiment1065Component', () => {
  let component: Experiment1065Component;
  let fixture: ComponentFixture<Experiment1065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
