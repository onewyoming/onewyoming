import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1243Component } from './experiment1243.component';

describe('Experiment1243Component', () => {
  let component: Experiment1243Component;
  let fixture: ComponentFixture<Experiment1243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
