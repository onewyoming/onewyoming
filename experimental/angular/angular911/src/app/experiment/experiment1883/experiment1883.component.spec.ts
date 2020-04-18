import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1883Component } from './experiment1883.component';

describe('Experiment1883Component', () => {
  let component: Experiment1883Component;
  let fixture: ComponentFixture<Experiment1883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
