import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1888Component } from './experiment1888.component';

describe('Experiment1888Component', () => {
  let component: Experiment1888Component;
  let fixture: ComponentFixture<Experiment1888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
