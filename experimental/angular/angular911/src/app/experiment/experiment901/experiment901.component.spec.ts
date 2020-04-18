import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment901Component } from './experiment901.component';

describe('Experiment901Component', () => {
  let component: Experiment901Component;
  let fixture: ComponentFixture<Experiment901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
