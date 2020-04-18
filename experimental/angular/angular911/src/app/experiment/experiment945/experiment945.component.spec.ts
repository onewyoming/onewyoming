import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment945Component } from './experiment945.component';

describe('Experiment945Component', () => {
  let component: Experiment945Component;
  let fixture: ComponentFixture<Experiment945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
