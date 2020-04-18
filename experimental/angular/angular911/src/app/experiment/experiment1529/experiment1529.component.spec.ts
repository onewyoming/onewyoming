import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1529Component } from './experiment1529.component';

describe('Experiment1529Component', () => {
  let component: Experiment1529Component;
  let fixture: ComponentFixture<Experiment1529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
