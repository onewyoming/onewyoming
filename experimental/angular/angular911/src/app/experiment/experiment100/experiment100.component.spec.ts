import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment100Component } from './experiment100.component';

describe('Experiment100Component', () => {
  let component: Experiment100Component;
  let fixture: ComponentFixture<Experiment100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
