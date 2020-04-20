import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1416Component } from './experiment1416.component';

describe('Experiment1416Component', () => {
  let component: Experiment1416Component;
  let fixture: ComponentFixture<Experiment1416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
