import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1491Component } from './experiment1491.component';

describe('Experiment1491Component', () => {
  let component: Experiment1491Component;
  let fixture: ComponentFixture<Experiment1491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
