import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment831Component } from './experiment831.component';

describe('Experiment831Component', () => {
  let component: Experiment831Component;
  let fixture: ComponentFixture<Experiment831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
