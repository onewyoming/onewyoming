import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1450Component } from './experiment1450.component';

describe('Experiment1450Component', () => {
  let component: Experiment1450Component;
  let fixture: ComponentFixture<Experiment1450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
