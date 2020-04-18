import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1021Component } from './experiment1021.component';

describe('Experiment1021Component', () => {
  let component: Experiment1021Component;
  let fixture: ComponentFixture<Experiment1021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
