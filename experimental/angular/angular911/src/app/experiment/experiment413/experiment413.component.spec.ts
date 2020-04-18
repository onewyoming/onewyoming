import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment413Component } from './experiment413.component';

describe('Experiment413Component', () => {
  let component: Experiment413Component;
  let fixture: ComponentFixture<Experiment413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
