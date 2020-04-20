import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1430Component } from './experiment1430.component';

describe('Experiment1430Component', () => {
  let component: Experiment1430Component;
  let fixture: ComponentFixture<Experiment1430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
