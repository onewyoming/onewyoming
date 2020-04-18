import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment611Component } from './experiment611.component';

describe('Experiment611Component', () => {
  let component: Experiment611Component;
  let fixture: ComponentFixture<Experiment611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
