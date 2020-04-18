import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1452Component } from './experiment1452.component';

describe('Experiment1452Component', () => {
  let component: Experiment1452Component;
  let fixture: ComponentFixture<Experiment1452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
