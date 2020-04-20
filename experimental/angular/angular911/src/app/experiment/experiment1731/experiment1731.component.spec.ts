import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1731Component } from './experiment1731.component';

describe('Experiment1731Component', () => {
  let component: Experiment1731Component;
  let fixture: ComponentFixture<Experiment1731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
