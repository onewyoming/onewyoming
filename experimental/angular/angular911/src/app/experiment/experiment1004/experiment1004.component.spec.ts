import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1004Component } from './experiment1004.component';

describe('Experiment1004Component', () => {
  let component: Experiment1004Component;
  let fixture: ComponentFixture<Experiment1004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
