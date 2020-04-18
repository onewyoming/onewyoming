import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1524Component } from './experiment1524.component';

describe('Experiment1524Component', () => {
  let component: Experiment1524Component;
  let fixture: ComponentFixture<Experiment1524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
