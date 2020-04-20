import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1161Component } from './experiment1161.component';

describe('Experiment1161Component', () => {
  let component: Experiment1161Component;
  let fixture: ComponentFixture<Experiment1161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
