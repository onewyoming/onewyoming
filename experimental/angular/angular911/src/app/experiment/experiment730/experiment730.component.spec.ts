import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment730Component } from './experiment730.component';

describe('Experiment730Component', () => {
  let component: Experiment730Component;
  let fixture: ComponentFixture<Experiment730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
