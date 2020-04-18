import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1496Component } from './experiment1496.component';

describe('Experiment1496Component', () => {
  let component: Experiment1496Component;
  let fixture: ComponentFixture<Experiment1496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
