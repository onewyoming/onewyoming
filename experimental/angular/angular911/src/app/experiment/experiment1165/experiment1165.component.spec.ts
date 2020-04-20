import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1165Component } from './experiment1165.component';

describe('Experiment1165Component', () => {
  let component: Experiment1165Component;
  let fixture: ComponentFixture<Experiment1165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
