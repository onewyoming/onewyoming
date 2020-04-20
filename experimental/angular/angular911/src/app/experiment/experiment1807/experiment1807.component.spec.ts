import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1807Component } from './experiment1807.component';

describe('Experiment1807Component', () => {
  let component: Experiment1807Component;
  let fixture: ComponentFixture<Experiment1807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
