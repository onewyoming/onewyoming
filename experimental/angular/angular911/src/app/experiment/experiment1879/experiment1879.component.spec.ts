import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1879Component } from './experiment1879.component';

describe('Experiment1879Component', () => {
  let component: Experiment1879Component;
  let fixture: ComponentFixture<Experiment1879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
