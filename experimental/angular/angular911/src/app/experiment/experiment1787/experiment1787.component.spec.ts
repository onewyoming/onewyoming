import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1787Component } from './experiment1787.component';

describe('Experiment1787Component', () => {
  let component: Experiment1787Component;
  let fixture: ComponentFixture<Experiment1787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
