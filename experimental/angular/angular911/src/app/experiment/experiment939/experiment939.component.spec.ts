import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment939Component } from './experiment939.component';

describe('Experiment939Component', () => {
  let component: Experiment939Component;
  let fixture: ComponentFixture<Experiment939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
