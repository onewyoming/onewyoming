import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1276Component } from './experiment1276.component';

describe('Experiment1276Component', () => {
  let component: Experiment1276Component;
  let fixture: ComponentFixture<Experiment1276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
