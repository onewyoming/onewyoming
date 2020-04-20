import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1865Component } from './experiment1865.component';

describe('Experiment1865Component', () => {
  let component: Experiment1865Component;
  let fixture: ComponentFixture<Experiment1865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
