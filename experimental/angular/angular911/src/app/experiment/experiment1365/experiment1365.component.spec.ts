import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1365Component } from './experiment1365.component';

describe('Experiment1365Component', () => {
  let component: Experiment1365Component;
  let fixture: ComponentFixture<Experiment1365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
