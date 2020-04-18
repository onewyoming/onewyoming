import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1412Component } from './experiment1412.component';

describe('Experiment1412Component', () => {
  let component: Experiment1412Component;
  let fixture: ComponentFixture<Experiment1412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
