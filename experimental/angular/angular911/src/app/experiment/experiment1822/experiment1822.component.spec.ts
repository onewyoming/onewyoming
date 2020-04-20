import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1822Component } from './experiment1822.component';

describe('Experiment1822Component', () => {
  let component: Experiment1822Component;
  let fixture: ComponentFixture<Experiment1822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
