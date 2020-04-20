import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1086Component } from './experiment1086.component';

describe('Experiment1086Component', () => {
  let component: Experiment1086Component;
  let fixture: ComponentFixture<Experiment1086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
