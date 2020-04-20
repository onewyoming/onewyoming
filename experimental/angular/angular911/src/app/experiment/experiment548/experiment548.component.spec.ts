import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment548Component } from './experiment548.component';

describe('Experiment548Component', () => {
  let component: Experiment548Component;
  let fixture: ComponentFixture<Experiment548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
