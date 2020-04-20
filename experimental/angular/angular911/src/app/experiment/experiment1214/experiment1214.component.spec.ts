import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1214Component } from './experiment1214.component';

describe('Experiment1214Component', () => {
  let component: Experiment1214Component;
  let fixture: ComponentFixture<Experiment1214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
