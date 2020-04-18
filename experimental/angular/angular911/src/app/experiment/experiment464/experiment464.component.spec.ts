import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment464Component } from './experiment464.component';

describe('Experiment464Component', () => {
  let component: Experiment464Component;
  let fixture: ComponentFixture<Experiment464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
