import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment18Component } from './experiment18.component';

describe('Experiment18Component', () => {
  let component: Experiment18Component;
  let fixture: ComponentFixture<Experiment18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
