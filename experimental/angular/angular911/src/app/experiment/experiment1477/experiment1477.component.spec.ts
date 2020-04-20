import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1477Component } from './experiment1477.component';

describe('Experiment1477Component', () => {
  let component: Experiment1477Component;
  let fixture: ComponentFixture<Experiment1477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
