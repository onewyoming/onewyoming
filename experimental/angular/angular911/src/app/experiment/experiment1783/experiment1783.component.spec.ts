import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1783Component } from './experiment1783.component';

describe('Experiment1783Component', () => {
  let component: Experiment1783Component;
  let fixture: ComponentFixture<Experiment1783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
