import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1590Component } from './experiment1590.component';

describe('Experiment1590Component', () => {
  let component: Experiment1590Component;
  let fixture: ComponentFixture<Experiment1590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
