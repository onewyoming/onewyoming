import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1975Component } from './experiment1975.component';

describe('Experiment1975Component', () => {
  let component: Experiment1975Component;
  let fixture: ComponentFixture<Experiment1975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
