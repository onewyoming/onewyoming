import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1881Component } from './experiment1881.component';

describe('Experiment1881Component', () => {
  let component: Experiment1881Component;
  let fixture: ComponentFixture<Experiment1881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
