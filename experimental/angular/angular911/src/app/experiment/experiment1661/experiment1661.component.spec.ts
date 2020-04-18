import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1661Component } from './experiment1661.component';

describe('Experiment1661Component', () => {
  let component: Experiment1661Component;
  let fixture: ComponentFixture<Experiment1661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
