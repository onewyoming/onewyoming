import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1560Component } from './experiment1560.component';

describe('Experiment1560Component', () => {
  let component: Experiment1560Component;
  let fixture: ComponentFixture<Experiment1560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
