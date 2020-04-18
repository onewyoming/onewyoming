import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1961Component } from './experiment1961.component';

describe('Experiment1961Component', () => {
  let component: Experiment1961Component;
  let fixture: ComponentFixture<Experiment1961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
