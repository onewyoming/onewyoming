import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1322Component } from './experiment1322.component';

describe('Experiment1322Component', () => {
  let component: Experiment1322Component;
  let fixture: ComponentFixture<Experiment1322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
