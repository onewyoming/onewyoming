import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1907Component } from './experiment1907.component';

describe('Experiment1907Component', () => {
  let component: Experiment1907Component;
  let fixture: ComponentFixture<Experiment1907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
