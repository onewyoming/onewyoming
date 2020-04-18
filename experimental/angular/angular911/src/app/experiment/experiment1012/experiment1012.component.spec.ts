import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1012Component } from './experiment1012.component';

describe('Experiment1012Component', () => {
  let component: Experiment1012Component;
  let fixture: ComponentFixture<Experiment1012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
