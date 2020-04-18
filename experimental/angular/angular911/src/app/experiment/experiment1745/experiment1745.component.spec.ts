import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1745Component } from './experiment1745.component';

describe('Experiment1745Component', () => {
  let component: Experiment1745Component;
  let fixture: ComponentFixture<Experiment1745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
