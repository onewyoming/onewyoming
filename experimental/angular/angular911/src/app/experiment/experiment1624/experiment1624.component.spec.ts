import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1624Component } from './experiment1624.component';

describe('Experiment1624Component', () => {
  let component: Experiment1624Component;
  let fixture: ComponentFixture<Experiment1624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
