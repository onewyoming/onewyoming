import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1927Component } from './experiment1927.component';

describe('Experiment1927Component', () => {
  let component: Experiment1927Component;
  let fixture: ComponentFixture<Experiment1927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
