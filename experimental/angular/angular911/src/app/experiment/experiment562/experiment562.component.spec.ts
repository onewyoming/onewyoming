import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment562Component } from './experiment562.component';

describe('Experiment562Component', () => {
  let component: Experiment562Component;
  let fixture: ComponentFixture<Experiment562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
