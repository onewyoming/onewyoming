import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1946Component } from './experiment1946.component';

describe('Experiment1946Component', () => {
  let component: Experiment1946Component;
  let fixture: ComponentFixture<Experiment1946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
