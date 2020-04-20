import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment452Component } from './experiment452.component';

describe('Experiment452Component', () => {
  let component: Experiment452Component;
  let fixture: ComponentFixture<Experiment452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
