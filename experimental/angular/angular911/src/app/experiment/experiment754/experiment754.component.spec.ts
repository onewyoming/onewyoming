import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment754Component } from './experiment754.component';

describe('Experiment754Component', () => {
  let component: Experiment754Component;
  let fixture: ComponentFixture<Experiment754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
