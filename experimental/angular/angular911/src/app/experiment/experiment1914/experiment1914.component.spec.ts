import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1914Component } from './experiment1914.component';

describe('Experiment1914Component', () => {
  let component: Experiment1914Component;
  let fixture: ComponentFixture<Experiment1914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
