import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment688Component } from './experiment688.component';

describe('Experiment688Component', () => {
  let component: Experiment688Component;
  let fixture: ComponentFixture<Experiment688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment688Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
