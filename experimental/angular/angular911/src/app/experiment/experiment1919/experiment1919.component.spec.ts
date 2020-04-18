import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1919Component } from './experiment1919.component';

describe('Experiment1919Component', () => {
  let component: Experiment1919Component;
  let fixture: ComponentFixture<Experiment1919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
