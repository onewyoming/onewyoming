import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1467Component } from './experiment1467.component';

describe('Experiment1467Component', () => {
  let component: Experiment1467Component;
  let fixture: ComponentFixture<Experiment1467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
