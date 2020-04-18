import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment468Component } from './experiment468.component';

describe('Experiment468Component', () => {
  let component: Experiment468Component;
  let fixture: ComponentFixture<Experiment468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
