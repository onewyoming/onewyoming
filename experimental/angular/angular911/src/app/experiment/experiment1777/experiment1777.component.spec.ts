import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1777Component } from './experiment1777.component';

describe('Experiment1777Component', () => {
  let component: Experiment1777Component;
  let fixture: ComponentFixture<Experiment1777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
