import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1047Component } from './experiment1047.component';

describe('Experiment1047Component', () => {
  let component: Experiment1047Component;
  let fixture: ComponentFixture<Experiment1047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
