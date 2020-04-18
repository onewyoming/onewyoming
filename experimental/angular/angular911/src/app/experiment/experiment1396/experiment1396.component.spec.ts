import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1396Component } from './experiment1396.component';

describe('Experiment1396Component', () => {
  let component: Experiment1396Component;
  let fixture: ComponentFixture<Experiment1396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
