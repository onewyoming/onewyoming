import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1208Component } from './experiment1208.component';

describe('Experiment1208Component', () => {
  let component: Experiment1208Component;
  let fixture: ComponentFixture<Experiment1208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
