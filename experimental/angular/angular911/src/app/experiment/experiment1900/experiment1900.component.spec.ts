import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1900Component } from './experiment1900.component';

describe('Experiment1900Component', () => {
  let component: Experiment1900Component;
  let fixture: ComponentFixture<Experiment1900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
