import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1476Component } from './experiment1476.component';

describe('Experiment1476Component', () => {
  let component: Experiment1476Component;
  let fixture: ComponentFixture<Experiment1476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
