import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1378Component } from './experiment1378.component';

describe('Experiment1378Component', () => {
  let component: Experiment1378Component;
  let fixture: ComponentFixture<Experiment1378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
