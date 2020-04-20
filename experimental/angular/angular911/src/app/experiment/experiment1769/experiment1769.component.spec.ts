import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1769Component } from './experiment1769.component';

describe('Experiment1769Component', () => {
  let component: Experiment1769Component;
  let fixture: ComponentFixture<Experiment1769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
