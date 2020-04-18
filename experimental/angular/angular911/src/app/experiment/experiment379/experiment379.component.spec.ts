import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment379Component } from './experiment379.component';

describe('Experiment379Component', () => {
  let component: Experiment379Component;
  let fixture: ComponentFixture<Experiment379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
