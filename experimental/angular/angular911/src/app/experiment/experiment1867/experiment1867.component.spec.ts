import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1867Component } from './experiment1867.component';

describe('Experiment1867Component', () => {
  let component: Experiment1867Component;
  let fixture: ComponentFixture<Experiment1867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
