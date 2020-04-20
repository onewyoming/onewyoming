import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment574Component } from './experiment574.component';

describe('Experiment574Component', () => {
  let component: Experiment574Component;
  let fixture: ComponentFixture<Experiment574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
