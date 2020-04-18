import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1766Component } from './experiment1766.component';

describe('Experiment1766Component', () => {
  let component: Experiment1766Component;
  let fixture: ComponentFixture<Experiment1766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
