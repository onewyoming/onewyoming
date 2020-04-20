import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1891Component } from './experiment1891.component';

describe('Experiment1891Component', () => {
  let component: Experiment1891Component;
  let fixture: ComponentFixture<Experiment1891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
