import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment88Component } from './experiment88.component';

describe('Experiment88Component', () => {
  let component: Experiment88Component;
  let fixture: ComponentFixture<Experiment88Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment88Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
