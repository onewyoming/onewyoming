import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1088Component } from './experiment1088.component';

describe('Experiment1088Component', () => {
  let component: Experiment1088Component;
  let fixture: ComponentFixture<Experiment1088Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1088Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
