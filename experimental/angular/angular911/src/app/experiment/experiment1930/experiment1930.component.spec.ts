import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1930Component } from './experiment1930.component';

describe('Experiment1930Component', () => {
  let component: Experiment1930Component;
  let fixture: ComponentFixture<Experiment1930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
