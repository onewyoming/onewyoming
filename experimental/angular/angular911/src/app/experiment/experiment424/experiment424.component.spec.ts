import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment424Component } from './experiment424.component';

describe('Experiment424Component', () => {
  let component: Experiment424Component;
  let fixture: ComponentFixture<Experiment424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
