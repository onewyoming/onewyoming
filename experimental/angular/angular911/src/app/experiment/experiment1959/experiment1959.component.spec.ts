import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1959Component } from './experiment1959.component';

describe('Experiment1959Component', () => {
  let component: Experiment1959Component;
  let fixture: ComponentFixture<Experiment1959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1959Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
