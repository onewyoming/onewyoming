import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1205Component } from './experiment1205.component';

describe('Experiment1205Component', () => {
  let component: Experiment1205Component;
  let fixture: ComponentFixture<Experiment1205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
