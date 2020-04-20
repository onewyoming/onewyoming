import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1046Component } from './experiment1046.component';

describe('Experiment1046Component', () => {
  let component: Experiment1046Component;
  let fixture: ComponentFixture<Experiment1046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
