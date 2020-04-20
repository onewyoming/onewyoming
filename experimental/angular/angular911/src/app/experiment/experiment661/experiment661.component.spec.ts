import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment661Component } from './experiment661.component';

describe('Experiment661Component', () => {
  let component: Experiment661Component;
  let fixture: ComponentFixture<Experiment661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
