import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment209Component } from './experiment209.component';

describe('Experiment209Component', () => {
  let component: Experiment209Component;
  let fixture: ComponentFixture<Experiment209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
