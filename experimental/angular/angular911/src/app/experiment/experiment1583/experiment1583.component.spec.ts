import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1583Component } from './experiment1583.component';

describe('Experiment1583Component', () => {
  let component: Experiment1583Component;
  let fixture: ComponentFixture<Experiment1583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
