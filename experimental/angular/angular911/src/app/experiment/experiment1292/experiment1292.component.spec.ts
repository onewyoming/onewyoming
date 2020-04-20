import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1292Component } from './experiment1292.component';

describe('Experiment1292Component', () => {
  let component: Experiment1292Component;
  let fixture: ComponentFixture<Experiment1292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
