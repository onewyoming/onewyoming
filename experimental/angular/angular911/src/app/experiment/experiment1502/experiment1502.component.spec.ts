import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1502Component } from './experiment1502.component';

describe('Experiment1502Component', () => {
  let component: Experiment1502Component;
  let fixture: ComponentFixture<Experiment1502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
