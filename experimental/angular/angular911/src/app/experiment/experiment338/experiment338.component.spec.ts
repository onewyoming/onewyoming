import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment338Component } from './experiment338.component';

describe('Experiment338Component', () => {
  let component: Experiment338Component;
  let fixture: ComponentFixture<Experiment338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
