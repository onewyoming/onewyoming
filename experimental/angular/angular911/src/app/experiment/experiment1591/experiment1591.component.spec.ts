import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1591Component } from './experiment1591.component';

describe('Experiment1591Component', () => {
  let component: Experiment1591Component;
  let fixture: ComponentFixture<Experiment1591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
