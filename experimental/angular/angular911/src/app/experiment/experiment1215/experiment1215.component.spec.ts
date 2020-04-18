import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1215Component } from './experiment1215.component';

describe('Experiment1215Component', () => {
  let component: Experiment1215Component;
  let fixture: ComponentFixture<Experiment1215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
