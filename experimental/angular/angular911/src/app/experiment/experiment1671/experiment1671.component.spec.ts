import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1671Component } from './experiment1671.component';

describe('Experiment1671Component', () => {
  let component: Experiment1671Component;
  let fixture: ComponentFixture<Experiment1671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
