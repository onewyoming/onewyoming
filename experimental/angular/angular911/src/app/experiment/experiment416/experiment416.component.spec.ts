import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment416Component } from './experiment416.component';

describe('Experiment416Component', () => {
  let component: Experiment416Component;
  let fixture: ComponentFixture<Experiment416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
