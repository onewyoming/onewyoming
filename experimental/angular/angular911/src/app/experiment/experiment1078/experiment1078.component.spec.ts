import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1078Component } from './experiment1078.component';

describe('Experiment1078Component', () => {
  let component: Experiment1078Component;
  let fixture: ComponentFixture<Experiment1078Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1078Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
