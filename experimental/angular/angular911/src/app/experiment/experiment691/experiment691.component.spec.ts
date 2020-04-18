import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment691Component } from './experiment691.component';

describe('Experiment691Component', () => {
  let component: Experiment691Component;
  let fixture: ComponentFixture<Experiment691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
