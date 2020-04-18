import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1797Component } from './experiment1797.component';

describe('Experiment1797Component', () => {
  let component: Experiment1797Component;
  let fixture: ComponentFixture<Experiment1797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
