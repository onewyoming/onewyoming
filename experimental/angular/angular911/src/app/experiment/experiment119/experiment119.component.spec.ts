import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment119Component } from './experiment119.component';

describe('Experiment119Component', () => {
  let component: Experiment119Component;
  let fixture: ComponentFixture<Experiment119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
