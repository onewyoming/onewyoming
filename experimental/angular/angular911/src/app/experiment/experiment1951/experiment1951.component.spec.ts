import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1951Component } from './experiment1951.component';

describe('Experiment1951Component', () => {
  let component: Experiment1951Component;
  let fixture: ComponentFixture<Experiment1951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
