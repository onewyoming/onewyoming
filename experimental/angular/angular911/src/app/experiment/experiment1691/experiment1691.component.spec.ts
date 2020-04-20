import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1691Component } from './experiment1691.component';

describe('Experiment1691Component', () => {
  let component: Experiment1691Component;
  let fixture: ComponentFixture<Experiment1691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
