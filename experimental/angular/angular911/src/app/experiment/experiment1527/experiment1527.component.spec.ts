import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1527Component } from './experiment1527.component';

describe('Experiment1527Component', () => {
  let component: Experiment1527Component;
  let fixture: ComponentFixture<Experiment1527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
