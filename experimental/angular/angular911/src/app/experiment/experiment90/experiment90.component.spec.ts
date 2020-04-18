import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment90Component } from './experiment90.component';

describe('Experiment90Component', () => {
  let component: Experiment90Component;
  let fixture: ComponentFixture<Experiment90Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment90Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
