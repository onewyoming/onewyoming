import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment613Component } from './experiment613.component';

describe('Experiment613Component', () => {
  let component: Experiment613Component;
  let fixture: ComponentFixture<Experiment613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
