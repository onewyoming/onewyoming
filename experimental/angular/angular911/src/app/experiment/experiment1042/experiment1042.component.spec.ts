import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1042Component } from './experiment1042.component';

describe('Experiment1042Component', () => {
  let component: Experiment1042Component;
  let fixture: ComponentFixture<Experiment1042Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1042Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
