import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1602Component } from './experiment1602.component';

describe('Experiment1602Component', () => {
  let component: Experiment1602Component;
  let fixture: ComponentFixture<Experiment1602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
