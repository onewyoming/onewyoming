import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment676Component } from './experiment676.component';

describe('Experiment676Component', () => {
  let component: Experiment676Component;
  let fixture: ComponentFixture<Experiment676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment676Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
