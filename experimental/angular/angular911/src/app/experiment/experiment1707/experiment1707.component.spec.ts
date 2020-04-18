import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1707Component } from './experiment1707.component';

describe('Experiment1707Component', () => {
  let component: Experiment1707Component;
  let fixture: ComponentFixture<Experiment1707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
