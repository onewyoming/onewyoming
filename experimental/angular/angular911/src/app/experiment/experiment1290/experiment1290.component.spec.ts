import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1290Component } from './experiment1290.component';

describe('Experiment1290Component', () => {
  let component: Experiment1290Component;
  let fixture: ComponentFixture<Experiment1290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
