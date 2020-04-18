import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1545Component } from './experiment1545.component';

describe('Experiment1545Component', () => {
  let component: Experiment1545Component;
  let fixture: ComponentFixture<Experiment1545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
