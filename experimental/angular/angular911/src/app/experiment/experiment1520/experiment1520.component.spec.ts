import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1520Component } from './experiment1520.component';

describe('Experiment1520Component', () => {
  let component: Experiment1520Component;
  let fixture: ComponentFixture<Experiment1520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
