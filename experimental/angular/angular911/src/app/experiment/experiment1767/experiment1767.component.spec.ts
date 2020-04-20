import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1767Component } from './experiment1767.component';

describe('Experiment1767Component', () => {
  let component: Experiment1767Component;
  let fixture: ComponentFixture<Experiment1767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
