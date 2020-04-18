import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1093Component } from './experiment1093.component';

describe('Experiment1093Component', () => {
  let component: Experiment1093Component;
  let fixture: ComponentFixture<Experiment1093Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1093Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
