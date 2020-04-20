import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment637Component } from './experiment637.component';

describe('Experiment637Component', () => {
  let component: Experiment637Component;
  let fixture: ComponentFixture<Experiment637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
