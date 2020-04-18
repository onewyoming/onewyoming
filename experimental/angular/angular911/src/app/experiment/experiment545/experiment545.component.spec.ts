import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment545Component } from './experiment545.component';

describe('Experiment545Component', () => {
  let component: Experiment545Component;
  let fixture: ComponentFixture<Experiment545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
