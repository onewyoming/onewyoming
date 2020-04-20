import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1213Component } from './experiment1213.component';

describe('Experiment1213Component', () => {
  let component: Experiment1213Component;
  let fixture: ComponentFixture<Experiment1213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
