import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1678Component } from './experiment1678.component';

describe('Experiment1678Component', () => {
  let component: Experiment1678Component;
  let fixture: ComponentFixture<Experiment1678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
