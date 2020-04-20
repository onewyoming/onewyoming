import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1980Component } from './experiment1980.component';

describe('Experiment1980Component', () => {
  let component: Experiment1980Component;
  let fixture: ComponentFixture<Experiment1980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
