import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1895Component } from './experiment1895.component';

describe('Experiment1895Component', () => {
  let component: Experiment1895Component;
  let fixture: ComponentFixture<Experiment1895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
