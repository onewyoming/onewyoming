import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1717Component } from './experiment1717.component';

describe('Experiment1717Component', () => {
  let component: Experiment1717Component;
  let fixture: ComponentFixture<Experiment1717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
