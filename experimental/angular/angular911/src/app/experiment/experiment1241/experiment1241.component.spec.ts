import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1241Component } from './experiment1241.component';

describe('Experiment1241Component', () => {
  let component: Experiment1241Component;
  let fixture: ComponentFixture<Experiment1241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
