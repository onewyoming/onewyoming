import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment331Component } from './experiment331.component';

describe('Experiment331Component', () => {
  let component: Experiment331Component;
  let fixture: ComponentFixture<Experiment331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
