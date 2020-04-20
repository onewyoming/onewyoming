import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1644Component } from './experiment1644.component';

describe('Experiment1644Component', () => {
  let component: Experiment1644Component;
  let fixture: ComponentFixture<Experiment1644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
