import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment642Component } from './experiment642.component';

describe('Experiment642Component', () => {
  let component: Experiment642Component;
  let fixture: ComponentFixture<Experiment642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
