import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1468Component } from './experiment1468.component';

describe('Experiment1468Component', () => {
  let component: Experiment1468Component;
  let fixture: ComponentFixture<Experiment1468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
