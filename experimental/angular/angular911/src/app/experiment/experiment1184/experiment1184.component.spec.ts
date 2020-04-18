import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1184Component } from './experiment1184.component';

describe('Experiment1184Component', () => {
  let component: Experiment1184Component;
  let fixture: ComponentFixture<Experiment1184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
