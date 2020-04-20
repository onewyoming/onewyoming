import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1968Component } from './experiment1968.component';

describe('Experiment1968Component', () => {
  let component: Experiment1968Component;
  let fixture: ComponentFixture<Experiment1968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
