import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1799Component } from './experiment1799.component';

describe('Experiment1799Component', () => {
  let component: Experiment1799Component;
  let fixture: ComponentFixture<Experiment1799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
