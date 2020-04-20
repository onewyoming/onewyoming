import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1653Component } from './experiment1653.component';

describe('Experiment1653Component', () => {
  let component: Experiment1653Component;
  let fixture: ComponentFixture<Experiment1653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
