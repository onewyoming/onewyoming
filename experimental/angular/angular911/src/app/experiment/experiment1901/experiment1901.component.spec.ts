import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1901Component } from './experiment1901.component';

describe('Experiment1901Component', () => {
  let component: Experiment1901Component;
  let fixture: ComponentFixture<Experiment1901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
