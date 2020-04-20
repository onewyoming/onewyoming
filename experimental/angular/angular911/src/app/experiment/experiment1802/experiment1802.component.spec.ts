import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1802Component } from './experiment1802.component';

describe('Experiment1802Component', () => {
  let component: Experiment1802Component;
  let fixture: ComponentFixture<Experiment1802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
