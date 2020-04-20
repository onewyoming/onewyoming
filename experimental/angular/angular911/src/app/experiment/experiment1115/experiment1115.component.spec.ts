import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1115Component } from './experiment1115.component';

describe('Experiment1115Component', () => {
  let component: Experiment1115Component;
  let fixture: ComponentFixture<Experiment1115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
