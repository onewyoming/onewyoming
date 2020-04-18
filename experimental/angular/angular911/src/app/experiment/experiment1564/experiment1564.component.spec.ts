import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1564Component } from './experiment1564.component';

describe('Experiment1564Component', () => {
  let component: Experiment1564Component;
  let fixture: ComponentFixture<Experiment1564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
