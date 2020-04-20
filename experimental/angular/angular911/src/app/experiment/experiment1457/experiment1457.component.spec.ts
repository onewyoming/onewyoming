import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1457Component } from './experiment1457.component';

describe('Experiment1457Component', () => {
  let component: Experiment1457Component;
  let fixture: ComponentFixture<Experiment1457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
