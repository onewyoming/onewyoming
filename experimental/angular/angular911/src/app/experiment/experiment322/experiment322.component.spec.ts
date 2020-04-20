import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment322Component } from './experiment322.component';

describe('Experiment322Component', () => {
  let component: Experiment322Component;
  let fixture: ComponentFixture<Experiment322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
