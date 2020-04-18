import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1456Component } from './experiment1456.component';

describe('Experiment1456Component', () => {
  let component: Experiment1456Component;
  let fixture: ComponentFixture<Experiment1456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
