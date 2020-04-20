import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment891Component } from './experiment891.component';

describe('Experiment891Component', () => {
  let component: Experiment891Component;
  let fixture: ComponentFixture<Experiment891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
