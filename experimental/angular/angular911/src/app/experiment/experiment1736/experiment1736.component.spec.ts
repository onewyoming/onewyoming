import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1736Component } from './experiment1736.component';

describe('Experiment1736Component', () => {
  let component: Experiment1736Component;
  let fixture: ComponentFixture<Experiment1736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
