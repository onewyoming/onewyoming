import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment437Component } from './experiment437.component';

describe('Experiment437Component', () => {
  let component: Experiment437Component;
  let fixture: ComponentFixture<Experiment437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
