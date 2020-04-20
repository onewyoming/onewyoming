import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1091Component } from './experiment1091.component';

describe('Experiment1091Component', () => {
  let component: Experiment1091Component;
  let fixture: ComponentFixture<Experiment1091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
