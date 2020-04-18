import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment609Component } from './experiment609.component';

describe('Experiment609Component', () => {
  let component: Experiment609Component;
  let fixture: ComponentFixture<Experiment609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
