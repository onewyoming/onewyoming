import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1425Component } from './experiment1425.component';

describe('Experiment1425Component', () => {
  let component: Experiment1425Component;
  let fixture: ComponentFixture<Experiment1425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
