import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment214Component } from './experiment214.component';

describe('Experiment214Component', () => {
  let component: Experiment214Component;
  let fixture: ComponentFixture<Experiment214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
