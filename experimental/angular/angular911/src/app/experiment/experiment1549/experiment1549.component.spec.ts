import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1549Component } from './experiment1549.component';

describe('Experiment1549Component', () => {
  let component: Experiment1549Component;
  let fixture: ComponentFixture<Experiment1549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1549Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
