import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment544Component } from './experiment544.component';

describe('Experiment544Component', () => {
  let component: Experiment544Component;
  let fixture: ComponentFixture<Experiment544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
