import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1808Component } from './experiment1808.component';

describe('Experiment1808Component', () => {
  let component: Experiment1808Component;
  let fixture: ComponentFixture<Experiment1808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
