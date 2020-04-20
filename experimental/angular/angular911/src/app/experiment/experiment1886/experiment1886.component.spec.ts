import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1886Component } from './experiment1886.component';

describe('Experiment1886Component', () => {
  let component: Experiment1886Component;
  let fixture: ComponentFixture<Experiment1886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
