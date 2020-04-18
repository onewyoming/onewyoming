import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1729Component } from './experiment1729.component';

describe('Experiment1729Component', () => {
  let component: Experiment1729Component;
  let fixture: ComponentFixture<Experiment1729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
