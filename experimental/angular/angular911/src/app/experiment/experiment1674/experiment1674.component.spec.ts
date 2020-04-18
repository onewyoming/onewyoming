import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1674Component } from './experiment1674.component';

describe('Experiment1674Component', () => {
  let component: Experiment1674Component;
  let fixture: ComponentFixture<Experiment1674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
