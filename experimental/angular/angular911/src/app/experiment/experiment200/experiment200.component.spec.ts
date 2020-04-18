import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment200Component } from './experiment200.component';

describe('Experiment200Component', () => {
  let component: Experiment200Component;
  let fixture: ComponentFixture<Experiment200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
