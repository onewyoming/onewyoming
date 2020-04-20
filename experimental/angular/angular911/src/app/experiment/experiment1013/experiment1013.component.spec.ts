import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1013Component } from './experiment1013.component';

describe('Experiment1013Component', () => {
  let component: Experiment1013Component;
  let fixture: ComponentFixture<Experiment1013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
