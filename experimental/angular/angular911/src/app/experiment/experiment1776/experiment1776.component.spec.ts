import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1776Component } from './experiment1776.component';

describe('Experiment1776Component', () => {
  let component: Experiment1776Component;
  let fixture: ComponentFixture<Experiment1776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
