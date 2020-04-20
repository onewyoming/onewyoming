import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1123Component } from './experiment1123.component';

describe('Experiment1123Component', () => {
  let component: Experiment1123Component;
  let fixture: ComponentFixture<Experiment1123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
