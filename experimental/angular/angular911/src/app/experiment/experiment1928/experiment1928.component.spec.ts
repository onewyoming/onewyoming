import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1928Component } from './experiment1928.component';

describe('Experiment1928Component', () => {
  let component: Experiment1928Component;
  let fixture: ComponentFixture<Experiment1928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
