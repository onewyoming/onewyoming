import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1651Component } from './experiment1651.component';

describe('Experiment1651Component', () => {
  let component: Experiment1651Component;
  let fixture: ComponentFixture<Experiment1651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
