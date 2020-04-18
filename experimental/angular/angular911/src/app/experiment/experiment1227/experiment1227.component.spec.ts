import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1227Component } from './experiment1227.component';

describe('Experiment1227Component', () => {
  let component: Experiment1227Component;
  let fixture: ComponentFixture<Experiment1227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
