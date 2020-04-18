import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1291Component } from './experiment1291.component';

describe('Experiment1291Component', () => {
  let component: Experiment1291Component;
  let fixture: ComponentFixture<Experiment1291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
