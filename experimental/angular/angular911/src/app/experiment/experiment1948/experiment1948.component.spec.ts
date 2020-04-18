import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1948Component } from './experiment1948.component';

describe('Experiment1948Component', () => {
  let component: Experiment1948Component;
  let fixture: ComponentFixture<Experiment1948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
