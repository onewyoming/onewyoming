import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1788Component } from './experiment1788.component';

describe('Experiment1788Component', () => {
  let component: Experiment1788Component;
  let fixture: ComponentFixture<Experiment1788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
