import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1976Component } from './experiment1976.component';

describe('Experiment1976Component', () => {
  let component: Experiment1976Component;
  let fixture: ComponentFixture<Experiment1976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
