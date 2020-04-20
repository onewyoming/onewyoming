import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1744Component } from './experiment1744.component';

describe('Experiment1744Component', () => {
  let component: Experiment1744Component;
  let fixture: ComponentFixture<Experiment1744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
