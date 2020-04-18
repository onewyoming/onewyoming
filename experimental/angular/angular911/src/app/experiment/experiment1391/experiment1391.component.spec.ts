import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1391Component } from './experiment1391.component';

describe('Experiment1391Component', () => {
  let component: Experiment1391Component;
  let fixture: ComponentFixture<Experiment1391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
