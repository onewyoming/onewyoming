import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1595Component } from './experiment1595.component';

describe('Experiment1595Component', () => {
  let component: Experiment1595Component;
  let fixture: ComponentFixture<Experiment1595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
