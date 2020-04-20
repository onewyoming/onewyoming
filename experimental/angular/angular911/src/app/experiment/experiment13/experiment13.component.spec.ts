import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment13Component } from './experiment13.component';

describe('Experiment13Component', () => {
  let component: Experiment13Component;
  let fixture: ComponentFixture<Experiment13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
