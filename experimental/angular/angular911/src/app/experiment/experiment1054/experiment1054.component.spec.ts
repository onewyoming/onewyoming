import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1054Component } from './experiment1054.component';

describe('Experiment1054Component', () => {
  let component: Experiment1054Component;
  let fixture: ComponentFixture<Experiment1054Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1054Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
