import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1236Component } from './experiment1236.component';

describe('Experiment1236Component', () => {
  let component: Experiment1236Component;
  let fixture: ComponentFixture<Experiment1236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
