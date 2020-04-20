import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment238Component } from './experiment238.component';

describe('Experiment238Component', () => {
  let component: Experiment238Component;
  let fixture: ComponentFixture<Experiment238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
