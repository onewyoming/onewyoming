import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1546Component } from './experiment1546.component';

describe('Experiment1546Component', () => {
  let component: Experiment1546Component;
  let fixture: ComponentFixture<Experiment1546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1546Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
