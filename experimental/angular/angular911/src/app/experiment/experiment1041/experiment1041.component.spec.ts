import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1041Component } from './experiment1041.component';

describe('Experiment1041Component', () => {
  let component: Experiment1041Component;
  let fixture: ComponentFixture<Experiment1041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
