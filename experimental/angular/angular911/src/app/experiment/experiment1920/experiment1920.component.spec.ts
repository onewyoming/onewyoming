import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1920Component } from './experiment1920.component';

describe('Experiment1920Component', () => {
  let component: Experiment1920Component;
  let fixture: ComponentFixture<Experiment1920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
