import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1320Component } from './experiment1320.component';

describe('Experiment1320Component', () => {
  let component: Experiment1320Component;
  let fixture: ComponentFixture<Experiment1320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
