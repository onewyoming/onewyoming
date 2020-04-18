import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1943Component } from './experiment1943.component';

describe('Experiment1943Component', () => {
  let component: Experiment1943Component;
  let fixture: ComponentFixture<Experiment1943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
