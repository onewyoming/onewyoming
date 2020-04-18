import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1594Component } from './experiment1594.component';

describe('Experiment1594Component', () => {
  let component: Experiment1594Component;
  let fixture: ComponentFixture<Experiment1594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
