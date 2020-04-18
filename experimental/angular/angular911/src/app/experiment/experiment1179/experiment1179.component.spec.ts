import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1179Component } from './experiment1179.component';

describe('Experiment1179Component', () => {
  let component: Experiment1179Component;
  let fixture: ComponentFixture<Experiment1179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
