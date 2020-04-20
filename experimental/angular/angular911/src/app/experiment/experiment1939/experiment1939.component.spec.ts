import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1939Component } from './experiment1939.component';

describe('Experiment1939Component', () => {
  let component: Experiment1939Component;
  let fixture: ComponentFixture<Experiment1939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
