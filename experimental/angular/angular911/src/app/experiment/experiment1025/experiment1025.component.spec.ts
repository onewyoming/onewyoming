import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1025Component } from './experiment1025.component';

describe('Experiment1025Component', () => {
  let component: Experiment1025Component;
  let fixture: ComponentFixture<Experiment1025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
