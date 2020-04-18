import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1570Component } from './experiment1570.component';

describe('Experiment1570Component', () => {
  let component: Experiment1570Component;
  let fixture: ComponentFixture<Experiment1570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
