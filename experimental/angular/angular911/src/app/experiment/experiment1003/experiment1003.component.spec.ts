import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1003Component } from './experiment1003.component';

describe('Experiment1003Component', () => {
  let component: Experiment1003Component;
  let fixture: ComponentFixture<Experiment1003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
