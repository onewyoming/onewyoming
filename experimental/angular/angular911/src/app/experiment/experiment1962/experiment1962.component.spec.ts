import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1962Component } from './experiment1962.component';

describe('Experiment1962Component', () => {
  let component: Experiment1962Component;
  let fixture: ComponentFixture<Experiment1962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
