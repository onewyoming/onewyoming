import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1473Component } from './experiment1473.component';

describe('Experiment1473Component', () => {
  let component: Experiment1473Component;
  let fixture: ComponentFixture<Experiment1473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
