import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1060Component } from './experiment1060.component';

describe('Experiment1060Component', () => {
  let component: Experiment1060Component;
  let fixture: ComponentFixture<Experiment1060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
