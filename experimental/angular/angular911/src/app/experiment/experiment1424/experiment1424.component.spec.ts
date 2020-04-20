import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1424Component } from './experiment1424.component';

describe('Experiment1424Component', () => {
  let component: Experiment1424Component;
  let fixture: ComponentFixture<Experiment1424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
