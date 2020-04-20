import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1333Component } from './experiment1333.component';

describe('Experiment1333Component', () => {
  let component: Experiment1333Component;
  let fixture: ComponentFixture<Experiment1333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
