import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment959Component } from './experiment959.component';

describe('Experiment959Component', () => {
  let component: Experiment959Component;
  let fixture: ComponentFixture<Experiment959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment959Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
