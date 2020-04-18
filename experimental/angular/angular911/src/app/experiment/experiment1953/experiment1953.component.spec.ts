import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1953Component } from './experiment1953.component';

describe('Experiment1953Component', () => {
  let component: Experiment1953Component;
  let fixture: ComponentFixture<Experiment1953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
