import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1098Component } from './experiment1098.component';

describe('Experiment1098Component', () => {
  let component: Experiment1098Component;
  let fixture: ComponentFixture<Experiment1098Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1098Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
