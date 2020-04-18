import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1238Component } from './experiment1238.component';

describe('Experiment1238Component', () => {
  let component: Experiment1238Component;
  let fixture: ComponentFixture<Experiment1238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
