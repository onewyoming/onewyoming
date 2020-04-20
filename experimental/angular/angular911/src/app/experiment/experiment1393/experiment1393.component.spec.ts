import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1393Component } from './experiment1393.component';

describe('Experiment1393Component', () => {
  let component: Experiment1393Component;
  let fixture: ComponentFixture<Experiment1393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
