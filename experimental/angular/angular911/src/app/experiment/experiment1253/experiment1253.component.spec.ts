import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1253Component } from './experiment1253.component';

describe('Experiment1253Component', () => {
  let component: Experiment1253Component;
  let fixture: ComponentFixture<Experiment1253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
