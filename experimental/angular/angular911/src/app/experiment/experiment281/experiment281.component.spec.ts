import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment281Component } from './experiment281.component';

describe('Experiment281Component', () => {
  let component: Experiment281Component;
  let fixture: ComponentFixture<Experiment281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
