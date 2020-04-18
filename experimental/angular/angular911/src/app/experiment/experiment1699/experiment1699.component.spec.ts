import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1699Component } from './experiment1699.component';

describe('Experiment1699Component', () => {
  let component: Experiment1699Component;
  let fixture: ComponentFixture<Experiment1699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
