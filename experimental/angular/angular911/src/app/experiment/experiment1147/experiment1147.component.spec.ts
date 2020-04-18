import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1147Component } from './experiment1147.component';

describe('Experiment1147Component', () => {
  let component: Experiment1147Component;
  let fixture: ComponentFixture<Experiment1147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
