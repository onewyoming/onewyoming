import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment478Component } from './experiment478.component';

describe('Experiment478Component', () => {
  let component: Experiment478Component;
  let fixture: ComponentFixture<Experiment478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
