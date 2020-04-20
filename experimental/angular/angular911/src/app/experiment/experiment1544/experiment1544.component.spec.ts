import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1544Component } from './experiment1544.component';

describe('Experiment1544Component', () => {
  let component: Experiment1544Component;
  let fixture: ComponentFixture<Experiment1544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
