import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1423Component } from './experiment1423.component';

describe('Experiment1423Component', () => {
  let component: Experiment1423Component;
  let fixture: ComponentFixture<Experiment1423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
