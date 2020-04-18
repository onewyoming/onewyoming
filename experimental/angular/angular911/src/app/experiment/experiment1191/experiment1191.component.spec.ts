import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1191Component } from './experiment1191.component';

describe('Experiment1191Component', () => {
  let component: Experiment1191Component;
  let fixture: ComponentFixture<Experiment1191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
