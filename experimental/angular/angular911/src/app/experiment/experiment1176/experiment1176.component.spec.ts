import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1176Component } from './experiment1176.component';

describe('Experiment1176Component', () => {
  let component: Experiment1176Component;
  let fixture: ComponentFixture<Experiment1176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
