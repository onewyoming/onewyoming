import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1254Component } from './experiment1254.component';

describe('Experiment1254Component', () => {
  let component: Experiment1254Component;
  let fixture: ComponentFixture<Experiment1254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
