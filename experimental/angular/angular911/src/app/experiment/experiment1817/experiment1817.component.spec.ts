import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1817Component } from './experiment1817.component';

describe('Experiment1817Component', () => {
  let component: Experiment1817Component;
  let fixture: ComponentFixture<Experiment1817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
