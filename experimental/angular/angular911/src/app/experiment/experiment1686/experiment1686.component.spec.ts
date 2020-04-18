import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1686Component } from './experiment1686.component';

describe('Experiment1686Component', () => {
  let component: Experiment1686Component;
  let fixture: ComponentFixture<Experiment1686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
