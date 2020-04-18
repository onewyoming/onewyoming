import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1094Component } from './experiment1094.component';

describe('Experiment1094Component', () => {
  let component: Experiment1094Component;
  let fixture: ComponentFixture<Experiment1094Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1094Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
