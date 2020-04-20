import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1059Component } from './experiment1059.component';

describe('Experiment1059Component', () => {
  let component: Experiment1059Component;
  let fixture: ComponentFixture<Experiment1059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
