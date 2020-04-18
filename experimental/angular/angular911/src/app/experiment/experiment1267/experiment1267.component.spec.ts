import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1267Component } from './experiment1267.component';

describe('Experiment1267Component', () => {
  let component: Experiment1267Component;
  let fixture: ComponentFixture<Experiment1267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
