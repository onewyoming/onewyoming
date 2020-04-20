import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment194Component } from './experiment194.component';

describe('Experiment194Component', () => {
  let component: Experiment194Component;
  let fixture: ComponentFixture<Experiment194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
