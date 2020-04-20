import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1724Component } from './experiment1724.component';

describe('Experiment1724Component', () => {
  let component: Experiment1724Component;
  let fixture: ComponentFixture<Experiment1724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
