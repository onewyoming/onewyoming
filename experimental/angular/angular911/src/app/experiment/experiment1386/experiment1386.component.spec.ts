import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1386Component } from './experiment1386.component';

describe('Experiment1386Component', () => {
  let component: Experiment1386Component;
  let fixture: ComponentFixture<Experiment1386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
