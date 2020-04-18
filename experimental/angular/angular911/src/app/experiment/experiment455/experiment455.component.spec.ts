import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment455Component } from './experiment455.component';

describe('Experiment455Component', () => {
  let component: Experiment455Component;
  let fixture: ComponentFixture<Experiment455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
