import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1050Component } from './experiment1050.component';

describe('Experiment1050Component', () => {
  let component: Experiment1050Component;
  let fixture: ComponentFixture<Experiment1050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
