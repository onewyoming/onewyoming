import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment276Component } from './experiment276.component';

describe('Experiment276Component', () => {
  let component: Experiment276Component;
  let fixture: ComponentFixture<Experiment276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
