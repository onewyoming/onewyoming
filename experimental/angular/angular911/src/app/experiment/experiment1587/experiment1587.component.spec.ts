import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1587Component } from './experiment1587.component';

describe('Experiment1587Component', () => {
  let component: Experiment1587Component;
  let fixture: ComponentFixture<Experiment1587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
