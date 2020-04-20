import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment456Component } from './experiment456.component';

describe('Experiment456Component', () => {
  let component: Experiment456Component;
  let fixture: ComponentFixture<Experiment456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
