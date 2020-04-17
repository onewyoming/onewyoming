import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment24Component } from './experiment24.component';

describe('Experiment24Component', () => {
  let component: Experiment24Component;
  let fixture: ComponentFixture<Experiment24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
