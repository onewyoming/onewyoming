import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1413Component } from './experiment1413.component';

describe('Experiment1413Component', () => {
  let component: Experiment1413Component;
  let fixture: ComponentFixture<Experiment1413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
