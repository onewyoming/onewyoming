import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1938Component } from './experiment1938.component';

describe('Experiment1938Component', () => {
  let component: Experiment1938Component;
  let fixture: ComponentFixture<Experiment1938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
