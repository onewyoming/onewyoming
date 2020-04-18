import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment397Component } from './experiment397.component';

describe('Experiment397Component', () => {
  let component: Experiment397Component;
  let fixture: ComponentFixture<Experiment397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment397Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
