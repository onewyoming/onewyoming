import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1954Component } from './experiment1954.component';

describe('Experiment1954Component', () => {
  let component: Experiment1954Component;
  let fixture: ComponentFixture<Experiment1954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
