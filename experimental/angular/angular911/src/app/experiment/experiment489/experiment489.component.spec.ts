import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment489Component } from './experiment489.component';

describe('Experiment489Component', () => {
  let component: Experiment489Component;
  let fixture: ComponentFixture<Experiment489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
