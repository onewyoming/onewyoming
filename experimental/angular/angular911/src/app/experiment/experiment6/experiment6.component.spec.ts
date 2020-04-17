import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment6Component } from './experiment6.component';

describe('Experiment6Component', () => {
  let component: Experiment6Component;
  let fixture: ComponentFixture<Experiment6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
