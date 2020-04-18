import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1197Component } from './experiment1197.component';

describe('Experiment1197Component', () => {
  let component: Experiment1197Component;
  let fixture: ComponentFixture<Experiment1197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
