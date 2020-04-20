import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1420Component } from './experiment1420.component';

describe('Experiment1420Component', () => {
  let component: Experiment1420Component;
  let fixture: ComponentFixture<Experiment1420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
