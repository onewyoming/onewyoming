import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1611Component } from './experiment1611.component';

describe('Experiment1611Component', () => {
  let component: Experiment1611Component;
  let fixture: ComponentFixture<Experiment1611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
