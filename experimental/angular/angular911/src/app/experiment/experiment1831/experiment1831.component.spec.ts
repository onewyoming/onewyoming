import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1831Component } from './experiment1831.component';

describe('Experiment1831Component', () => {
  let component: Experiment1831Component;
  let fixture: ComponentFixture<Experiment1831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
