import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1854Component } from './experiment1854.component';

describe('Experiment1854Component', () => {
  let component: Experiment1854Component;
  let fixture: ComponentFixture<Experiment1854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
