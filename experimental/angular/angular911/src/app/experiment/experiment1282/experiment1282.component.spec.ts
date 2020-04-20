import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1282Component } from './experiment1282.component';

describe('Experiment1282Component', () => {
  let component: Experiment1282Component;
  let fixture: ComponentFixture<Experiment1282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
