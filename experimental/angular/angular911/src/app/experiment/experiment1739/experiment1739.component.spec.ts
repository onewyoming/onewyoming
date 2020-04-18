import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1739Component } from './experiment1739.component';

describe('Experiment1739Component', () => {
  let component: Experiment1739Component;
  let fixture: ComponentFixture<Experiment1739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
