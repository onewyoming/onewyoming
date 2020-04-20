import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1002Component } from './experiment1002.component';

describe('Experiment1002Component', () => {
  let component: Experiment1002Component;
  let fixture: ComponentFixture<Experiment1002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
