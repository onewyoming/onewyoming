import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment264Component } from './experiment264.component';

describe('Experiment264Component', () => {
  let component: Experiment264Component;
  let fixture: ComponentFixture<Experiment264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
