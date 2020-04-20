import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1283Component } from './experiment1283.component';

describe('Experiment1283Component', () => {
  let component: Experiment1283Component;
  let fixture: ComponentFixture<Experiment1283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
