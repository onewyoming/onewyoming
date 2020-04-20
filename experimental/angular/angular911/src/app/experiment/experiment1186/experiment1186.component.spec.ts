import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1186Component } from './experiment1186.component';

describe('Experiment1186Component', () => {
  let component: Experiment1186Component;
  let fixture: ComponentFixture<Experiment1186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
