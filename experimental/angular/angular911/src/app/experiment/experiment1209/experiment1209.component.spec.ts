import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1209Component } from './experiment1209.component';

describe('Experiment1209Component', () => {
  let component: Experiment1209Component;
  let fixture: ComponentFixture<Experiment1209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
