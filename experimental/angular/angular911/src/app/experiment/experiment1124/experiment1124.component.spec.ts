import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1124Component } from './experiment1124.component';

describe('Experiment1124Component', () => {
  let component: Experiment1124Component;
  let fixture: ComponentFixture<Experiment1124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
