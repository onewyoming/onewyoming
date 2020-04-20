import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1551Component } from './experiment1551.component';

describe('Experiment1551Component', () => {
  let component: Experiment1551Component;
  let fixture: ComponentFixture<Experiment1551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
