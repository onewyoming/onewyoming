import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment457Component } from './experiment457.component';

describe('Experiment457Component', () => {
  let component: Experiment457Component;
  let fixture: ComponentFixture<Experiment457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
