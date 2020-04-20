import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1733Component } from './experiment1733.component';

describe('Experiment1733Component', () => {
  let component: Experiment1733Component;
  let fixture: ComponentFixture<Experiment1733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
