import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1870Component } from './experiment1870.component';

describe('Experiment1870Component', () => {
  let component: Experiment1870Component;
  let fixture: ComponentFixture<Experiment1870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
