import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment362Component } from './experiment362.component';

describe('Experiment362Component', () => {
  let component: Experiment362Component;
  let fixture: ComponentFixture<Experiment362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
