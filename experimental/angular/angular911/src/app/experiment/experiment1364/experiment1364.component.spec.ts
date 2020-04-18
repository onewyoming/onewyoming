import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1364Component } from './experiment1364.component';

describe('Experiment1364Component', () => {
  let component: Experiment1364Component;
  let fixture: ComponentFixture<Experiment1364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
