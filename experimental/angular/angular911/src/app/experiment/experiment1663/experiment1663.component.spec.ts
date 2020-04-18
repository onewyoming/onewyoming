import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1663Component } from './experiment1663.component';

describe('Experiment1663Component', () => {
  let component: Experiment1663Component;
  let fixture: ComponentFixture<Experiment1663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
