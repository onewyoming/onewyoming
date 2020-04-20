import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1915Component } from './experiment1915.component';

describe('Experiment1915Component', () => {
  let component: Experiment1915Component;
  let fixture: ComponentFixture<Experiment1915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
