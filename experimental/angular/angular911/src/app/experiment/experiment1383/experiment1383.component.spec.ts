import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1383Component } from './experiment1383.component';

describe('Experiment1383Component', () => {
  let component: Experiment1383Component;
  let fixture: ComponentFixture<Experiment1383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
