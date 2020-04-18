import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1362Component } from './experiment1362.component';

describe('Experiment1362Component', () => {
  let component: Experiment1362Component;
  let fixture: ComponentFixture<Experiment1362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
