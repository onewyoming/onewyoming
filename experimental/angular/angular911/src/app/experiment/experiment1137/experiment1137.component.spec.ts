import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1137Component } from './experiment1137.component';

describe('Experiment1137Component', () => {
  let component: Experiment1137Component;
  let fixture: ComponentFixture<Experiment1137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
