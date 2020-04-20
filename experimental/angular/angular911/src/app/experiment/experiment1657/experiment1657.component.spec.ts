import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1657Component } from './experiment1657.component';

describe('Experiment1657Component', () => {
  let component: Experiment1657Component;
  let fixture: ComponentFixture<Experiment1657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
