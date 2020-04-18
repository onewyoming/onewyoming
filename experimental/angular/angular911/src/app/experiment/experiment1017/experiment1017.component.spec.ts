import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1017Component } from './experiment1017.component';

describe('Experiment1017Component', () => {
  let component: Experiment1017Component;
  let fixture: ComponentFixture<Experiment1017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
