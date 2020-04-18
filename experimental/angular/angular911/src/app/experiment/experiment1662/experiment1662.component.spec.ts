import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1662Component } from './experiment1662.component';

describe('Experiment1662Component', () => {
  let component: Experiment1662Component;
  let fixture: ComponentFixture<Experiment1662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
