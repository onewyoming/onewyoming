import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1083Component } from './experiment1083.component';

describe('Experiment1083Component', () => {
  let component: Experiment1083Component;
  let fixture: ComponentFixture<Experiment1083Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1083Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
