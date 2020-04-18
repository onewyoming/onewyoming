import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1081Component } from './experiment1081.component';

describe('Experiment1081Component', () => {
  let component: Experiment1081Component;
  let fixture: ComponentFixture<Experiment1081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
