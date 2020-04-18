import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1599Component } from './experiment1599.component';

describe('Experiment1599Component', () => {
  let component: Experiment1599Component;
  let fixture: ComponentFixture<Experiment1599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
