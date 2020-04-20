import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1461Component } from './experiment1461.component';

describe('Experiment1461Component', () => {
  let component: Experiment1461Component;
  let fixture: ComponentFixture<Experiment1461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
