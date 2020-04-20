import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment662Component } from './experiment662.component';

describe('Experiment662Component', () => {
  let component: Experiment662Component;
  let fixture: ComponentFixture<Experiment662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
