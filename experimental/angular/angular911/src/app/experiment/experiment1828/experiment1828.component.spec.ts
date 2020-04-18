import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1828Component } from './experiment1828.component';

describe('Experiment1828Component', () => {
  let component: Experiment1828Component;
  let fixture: ComponentFixture<Experiment1828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
