import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1612Component } from './experiment1612.component';

describe('Experiment1612Component', () => {
  let component: Experiment1612Component;
  let fixture: ComponentFixture<Experiment1612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
