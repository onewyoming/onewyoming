import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1933Component } from './experiment1933.component';

describe('Experiment1933Component', () => {
  let component: Experiment1933Component;
  let fixture: ComponentFixture<Experiment1933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
