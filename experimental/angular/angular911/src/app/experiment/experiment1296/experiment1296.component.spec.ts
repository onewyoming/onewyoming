import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1296Component } from './experiment1296.component';

describe('Experiment1296Component', () => {
  let component: Experiment1296Component;
  let fixture: ComponentFixture<Experiment1296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
