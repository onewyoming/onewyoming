import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1211Component } from './experiment1211.component';

describe('Experiment1211Component', () => {
  let component: Experiment1211Component;
  let fixture: ComponentFixture<Experiment1211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
