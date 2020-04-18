import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1925Component } from './experiment1925.component';

describe('Experiment1925Component', () => {
  let component: Experiment1925Component;
  let fixture: ComponentFixture<Experiment1925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
