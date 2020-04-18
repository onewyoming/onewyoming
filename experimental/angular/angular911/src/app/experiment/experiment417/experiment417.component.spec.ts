import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment417Component } from './experiment417.component';

describe('Experiment417Component', () => {
  let component: Experiment417Component;
  let fixture: ComponentFixture<Experiment417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
