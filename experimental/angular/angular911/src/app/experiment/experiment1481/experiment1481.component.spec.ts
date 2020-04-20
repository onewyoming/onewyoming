import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1481Component } from './experiment1481.component';

describe('Experiment1481Component', () => {
  let component: Experiment1481Component;
  let fixture: ComponentFixture<Experiment1481Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1481Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
