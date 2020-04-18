import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1458Component } from './experiment1458.component';

describe('Experiment1458Component', () => {
  let component: Experiment1458Component;
  let fixture: ComponentFixture<Experiment1458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
