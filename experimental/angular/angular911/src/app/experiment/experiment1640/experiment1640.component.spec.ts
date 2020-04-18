import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1640Component } from './experiment1640.component';

describe('Experiment1640Component', () => {
  let component: Experiment1640Component;
  let fixture: ComponentFixture<Experiment1640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
