import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1270Component } from './experiment1270.component';

describe('Experiment1270Component', () => {
  let component: Experiment1270Component;
  let fixture: ComponentFixture<Experiment1270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
