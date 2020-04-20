import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1815Component } from './experiment1815.component';

describe('Experiment1815Component', () => {
  let component: Experiment1815Component;
  let fixture: ComponentFixture<Experiment1815Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1815Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
