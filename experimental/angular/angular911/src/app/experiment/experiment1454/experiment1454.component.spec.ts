import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1454Component } from './experiment1454.component';

describe('Experiment1454Component', () => {
  let component: Experiment1454Component;
  let fixture: ComponentFixture<Experiment1454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
