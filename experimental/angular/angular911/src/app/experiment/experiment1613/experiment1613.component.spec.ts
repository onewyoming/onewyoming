import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1613Component } from './experiment1613.component';

describe('Experiment1613Component', () => {
  let component: Experiment1613Component;
  let fixture: ComponentFixture<Experiment1613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
