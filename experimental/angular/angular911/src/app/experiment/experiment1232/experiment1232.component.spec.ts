import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1232Component } from './experiment1232.component';

describe('Experiment1232Component', () => {
  let component: Experiment1232Component;
  let fixture: ComponentFixture<Experiment1232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
