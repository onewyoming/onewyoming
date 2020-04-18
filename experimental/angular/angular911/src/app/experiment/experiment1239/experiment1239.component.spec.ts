import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1239Component } from './experiment1239.component';

describe('Experiment1239Component', () => {
  let component: Experiment1239Component;
  let fixture: ComponentFixture<Experiment1239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
