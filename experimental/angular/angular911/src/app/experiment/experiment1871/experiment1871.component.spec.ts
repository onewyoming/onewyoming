import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1871Component } from './experiment1871.component';

describe('Experiment1871Component', () => {
  let component: Experiment1871Component;
  let fixture: ComponentFixture<Experiment1871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
