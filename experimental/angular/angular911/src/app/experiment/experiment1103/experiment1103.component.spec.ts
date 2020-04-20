import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1103Component } from './experiment1103.component';

describe('Experiment1103Component', () => {
  let component: Experiment1103Component;
  let fixture: ComponentFixture<Experiment1103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
