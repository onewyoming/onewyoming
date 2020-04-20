import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment543Component } from './experiment543.component';

describe('Experiment543Component', () => {
  let component: Experiment543Component;
  let fixture: ComponentFixture<Experiment543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
