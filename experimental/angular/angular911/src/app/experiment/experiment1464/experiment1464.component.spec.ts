import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1464Component } from './experiment1464.component';

describe('Experiment1464Component', () => {
  let component: Experiment1464Component;
  let fixture: ComponentFixture<Experiment1464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
