import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment822Component } from './experiment822.component';

describe('Experiment822Component', () => {
  let component: Experiment822Component;
  let fixture: ComponentFixture<Experiment822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
