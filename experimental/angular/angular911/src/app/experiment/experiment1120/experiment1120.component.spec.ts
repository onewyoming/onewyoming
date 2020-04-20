import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1120Component } from './experiment1120.component';

describe('Experiment1120Component', () => {
  let component: Experiment1120Component;
  let fixture: ComponentFixture<Experiment1120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
