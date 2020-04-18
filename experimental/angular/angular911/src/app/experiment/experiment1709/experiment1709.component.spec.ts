import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1709Component } from './experiment1709.component';

describe('Experiment1709Component', () => {
  let component: Experiment1709Component;
  let fixture: ComponentFixture<Experiment1709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
