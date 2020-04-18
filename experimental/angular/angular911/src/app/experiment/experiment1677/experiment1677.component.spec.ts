import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1677Component } from './experiment1677.component';

describe('Experiment1677Component', () => {
  let component: Experiment1677Component;
  let fixture: ComponentFixture<Experiment1677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
