import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1237Component } from './experiment1237.component';

describe('Experiment1237Component', () => {
  let component: Experiment1237Component;
  let fixture: ComponentFixture<Experiment1237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
