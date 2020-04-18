import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment702Component } from './experiment702.component';

describe('Experiment702Component', () => {
  let component: Experiment702Component;
  let fixture: ComponentFixture<Experiment702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
