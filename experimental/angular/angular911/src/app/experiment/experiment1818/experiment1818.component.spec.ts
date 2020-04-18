import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1818Component } from './experiment1818.component';

describe('Experiment1818Component', () => {
  let component: Experiment1818Component;
  let fixture: ComponentFixture<Experiment1818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
