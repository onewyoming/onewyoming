import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment623Component } from './experiment623.component';

describe('Experiment623Component', () => {
  let component: Experiment623Component;
  let fixture: ComponentFixture<Experiment623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
