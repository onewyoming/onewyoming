import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1730Component } from './experiment1730.component';

describe('Experiment1730Component', () => {
  let component: Experiment1730Component;
  let fixture: ComponentFixture<Experiment1730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
