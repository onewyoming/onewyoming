import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment258Component } from './experiment258.component';

describe('Experiment258Component', () => {
  let component: Experiment258Component;
  let fixture: ComponentFixture<Experiment258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
