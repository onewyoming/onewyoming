import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1533Component } from './experiment1533.component';

describe('Experiment1533Component', () => {
  let component: Experiment1533Component;
  let fixture: ComponentFixture<Experiment1533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
