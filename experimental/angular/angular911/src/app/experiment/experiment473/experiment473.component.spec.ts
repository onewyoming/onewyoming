import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment473Component } from './experiment473.component';

describe('Experiment473Component', () => {
  let component: Experiment473Component;
  let fixture: ComponentFixture<Experiment473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
