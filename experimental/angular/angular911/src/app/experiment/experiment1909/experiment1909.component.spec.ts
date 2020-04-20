import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1909Component } from './experiment1909.component';

describe('Experiment1909Component', () => {
  let component: Experiment1909Component;
  let fixture: ComponentFixture<Experiment1909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
