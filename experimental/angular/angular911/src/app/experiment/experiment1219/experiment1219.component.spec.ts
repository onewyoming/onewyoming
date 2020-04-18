import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1219Component } from './experiment1219.component';

describe('Experiment1219Component', () => {
  let component: Experiment1219Component;
  let fixture: ComponentFixture<Experiment1219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
