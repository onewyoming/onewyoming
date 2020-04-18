import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1122Component } from './experiment1122.component';

describe('Experiment1122Component', () => {
  let component: Experiment1122Component;
  let fixture: ComponentFixture<Experiment1122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
