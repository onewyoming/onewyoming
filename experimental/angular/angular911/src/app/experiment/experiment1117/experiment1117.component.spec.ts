import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1117Component } from './experiment1117.component';

describe('Experiment1117Component', () => {
  let component: Experiment1117Component;
  let fixture: ComponentFixture<Experiment1117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
