import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1778Component } from './experiment1778.component';

describe('Experiment1778Component', () => {
  let component: Experiment1778Component;
  let fixture: ComponentFixture<Experiment1778Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1778Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
