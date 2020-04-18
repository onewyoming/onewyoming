import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1702Component } from './experiment1702.component';

describe('Experiment1702Component', () => {
  let component: Experiment1702Component;
  let fixture: ComponentFixture<Experiment1702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
