import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1770Component } from './experiment1770.component';

describe('Experiment1770Component', () => {
  let component: Experiment1770Component;
  let fixture: ComponentFixture<Experiment1770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
