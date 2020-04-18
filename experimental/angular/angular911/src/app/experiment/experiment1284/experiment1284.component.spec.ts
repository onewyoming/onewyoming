import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1284Component } from './experiment1284.component';

describe('Experiment1284Component', () => {
  let component: Experiment1284Component;
  let fixture: ComponentFixture<Experiment1284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
