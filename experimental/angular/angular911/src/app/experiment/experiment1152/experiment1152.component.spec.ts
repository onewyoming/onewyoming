import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1152Component } from './experiment1152.component';

describe('Experiment1152Component', () => {
  let component: Experiment1152Component;
  let fixture: ComponentFixture<Experiment1152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
