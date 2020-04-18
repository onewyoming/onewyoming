import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1465Component } from './experiment1465.component';

describe('Experiment1465Component', () => {
  let component: Experiment1465Component;
  let fixture: ComponentFixture<Experiment1465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
