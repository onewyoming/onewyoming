import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1130Component } from './experiment1130.component';

describe('Experiment1130Component', () => {
  let component: Experiment1130Component;
  let fixture: ComponentFixture<Experiment1130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
