import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1894Component } from './experiment1894.component';

describe('Experiment1894Component', () => {
  let component: Experiment1894Component;
  let fixture: ComponentFixture<Experiment1894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
