import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1070Component } from './experiment1070.component';

describe('Experiment1070Component', () => {
  let component: Experiment1070Component;
  let fixture: ComponentFixture<Experiment1070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
