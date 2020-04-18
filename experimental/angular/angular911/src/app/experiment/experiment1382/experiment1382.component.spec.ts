import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1382Component } from './experiment1382.component';

describe('Experiment1382Component', () => {
  let component: Experiment1382Component;
  let fixture: ComponentFixture<Experiment1382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
