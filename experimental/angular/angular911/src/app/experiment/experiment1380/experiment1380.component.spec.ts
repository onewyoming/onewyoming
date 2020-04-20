import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1380Component } from './experiment1380.component';

describe('Experiment1380Component', () => {
  let component: Experiment1380Component;
  let fixture: ComponentFixture<Experiment1380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
