import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1993Component } from './experiment1993.component';

describe('Experiment1993Component', () => {
  let component: Experiment1993Component;
  let fixture: ComponentFixture<Experiment1993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
