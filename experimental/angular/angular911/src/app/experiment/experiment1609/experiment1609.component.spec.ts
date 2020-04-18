import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1609Component } from './experiment1609.component';

describe('Experiment1609Component', () => {
  let component: Experiment1609Component;
  let fixture: ComponentFixture<Experiment1609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
