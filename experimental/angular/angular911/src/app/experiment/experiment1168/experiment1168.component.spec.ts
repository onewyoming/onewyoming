import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1168Component } from './experiment1168.component';

describe('Experiment1168Component', () => {
  let component: Experiment1168Component;
  let fixture: ComponentFixture<Experiment1168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
