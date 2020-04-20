import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1642Component } from './experiment1642.component';

describe('Experiment1642Component', () => {
  let component: Experiment1642Component;
  let fixture: ComponentFixture<Experiment1642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
