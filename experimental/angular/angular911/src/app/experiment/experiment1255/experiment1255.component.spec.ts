import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1255Component } from './experiment1255.component';

describe('Experiment1255Component', () => {
  let component: Experiment1255Component;
  let fixture: ComponentFixture<Experiment1255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
