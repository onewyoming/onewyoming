import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment928Component } from './experiment928.component';

describe('Experiment928Component', () => {
  let component: Experiment928Component;
  let fixture: ComponentFixture<Experiment928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
