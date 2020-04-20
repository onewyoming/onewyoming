import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1848Component } from './experiment1848.component';

describe('Experiment1848Component', () => {
  let component: Experiment1848Component;
  let fixture: ComponentFixture<Experiment1848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
