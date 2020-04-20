import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1298Component } from './experiment1298.component';

describe('Experiment1298Component', () => {
  let component: Experiment1298Component;
  let fixture: ComponentFixture<Experiment1298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
