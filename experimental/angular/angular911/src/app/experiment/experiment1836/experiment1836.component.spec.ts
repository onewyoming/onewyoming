import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1836Component } from './experiment1836.component';

describe('Experiment1836Component', () => {
  let component: Experiment1836Component;
  let fixture: ComponentFixture<Experiment1836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
