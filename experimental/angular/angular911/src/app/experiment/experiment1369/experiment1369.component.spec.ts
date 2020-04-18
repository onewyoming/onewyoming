import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1369Component } from './experiment1369.component';

describe('Experiment1369Component', () => {
  let component: Experiment1369Component;
  let fixture: ComponentFixture<Experiment1369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
