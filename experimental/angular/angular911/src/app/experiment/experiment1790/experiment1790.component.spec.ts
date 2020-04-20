import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1790Component } from './experiment1790.component';

describe('Experiment1790Component', () => {
  let component: Experiment1790Component;
  let fixture: ComponentFixture<Experiment1790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1790Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
