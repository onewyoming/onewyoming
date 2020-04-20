import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1234Component } from './experiment1234.component';

describe('Experiment1234Component', () => {
  let component: Experiment1234Component;
  let fixture: ComponentFixture<Experiment1234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
