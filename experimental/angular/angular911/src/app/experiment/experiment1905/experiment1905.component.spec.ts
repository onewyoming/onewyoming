import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1905Component } from './experiment1905.component';

describe('Experiment1905Component', () => {
  let component: Experiment1905Component;
  let fixture: ComponentFixture<Experiment1905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
