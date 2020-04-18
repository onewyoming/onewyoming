import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1455Component } from './experiment1455.component';

describe('Experiment1455Component', () => {
  let component: Experiment1455Component;
  let fixture: ComponentFixture<Experiment1455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
