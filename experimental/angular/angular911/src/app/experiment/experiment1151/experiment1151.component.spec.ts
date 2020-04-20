import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1151Component } from './experiment1151.component';

describe('Experiment1151Component', () => {
  let component: Experiment1151Component;
  let fixture: ComponentFixture<Experiment1151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
