import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1762Component } from './experiment1762.component';

describe('Experiment1762Component', () => {
  let component: Experiment1762Component;
  let fixture: ComponentFixture<Experiment1762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
