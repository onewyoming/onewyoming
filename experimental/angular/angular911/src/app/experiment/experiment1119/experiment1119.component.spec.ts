import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1119Component } from './experiment1119.component';

describe('Experiment1119Component', () => {
  let component: Experiment1119Component;
  let fixture: ComponentFixture<Experiment1119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
