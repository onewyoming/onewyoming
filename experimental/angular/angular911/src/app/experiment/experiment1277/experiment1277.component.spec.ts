import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1277Component } from './experiment1277.component';

describe('Experiment1277Component', () => {
  let component: Experiment1277Component;
  let fixture: ComponentFixture<Experiment1277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
