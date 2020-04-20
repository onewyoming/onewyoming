import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment368Component } from './experiment368.component';

describe('Experiment368Component', () => {
  let component: Experiment368Component;
  let fixture: ComponentFixture<Experiment368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
