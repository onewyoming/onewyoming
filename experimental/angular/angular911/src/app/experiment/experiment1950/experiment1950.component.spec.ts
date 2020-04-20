import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1950Component } from './experiment1950.component';

describe('Experiment1950Component', () => {
  let component: Experiment1950Component;
  let fixture: ComponentFixture<Experiment1950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
