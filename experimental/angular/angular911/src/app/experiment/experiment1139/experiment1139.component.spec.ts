import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1139Component } from './experiment1139.component';

describe('Experiment1139Component', () => {
  let component: Experiment1139Component;
  let fixture: ComponentFixture<Experiment1139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
