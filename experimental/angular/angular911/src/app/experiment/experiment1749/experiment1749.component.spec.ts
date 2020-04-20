import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1749Component } from './experiment1749.component';

describe('Experiment1749Component', () => {
  let component: Experiment1749Component;
  let fixture: ComponentFixture<Experiment1749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
