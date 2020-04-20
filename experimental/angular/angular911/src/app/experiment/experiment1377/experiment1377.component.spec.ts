import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1377Component } from './experiment1377.component';

describe('Experiment1377Component', () => {
  let component: Experiment1377Component;
  let fixture: ComponentFixture<Experiment1377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
