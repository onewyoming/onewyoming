import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1801Component } from './experiment1801.component';

describe('Experiment1801Component', () => {
  let component: Experiment1801Component;
  let fixture: ComponentFixture<Experiment1801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
