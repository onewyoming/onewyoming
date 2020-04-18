import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment168Component } from './experiment168.component';

describe('Experiment168Component', () => {
  let component: Experiment168Component;
  let fixture: ComponentFixture<Experiment168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
