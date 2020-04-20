import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1126Component } from './experiment1126.component';

describe('Experiment1126Component', () => {
  let component: Experiment1126Component;
  let fixture: ComponentFixture<Experiment1126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
