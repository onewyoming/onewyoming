import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1917Component } from './experiment1917.component';

describe('Experiment1917Component', () => {
  let component: Experiment1917Component;
  let fixture: ComponentFixture<Experiment1917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
