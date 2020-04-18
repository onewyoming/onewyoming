import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1958Component } from './experiment1958.component';

describe('Experiment1958Component', () => {
  let component: Experiment1958Component;
  let fixture: ComponentFixture<Experiment1958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
