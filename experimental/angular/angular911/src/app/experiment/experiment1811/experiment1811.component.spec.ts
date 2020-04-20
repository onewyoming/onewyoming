import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1811Component } from './experiment1811.component';

describe('Experiment1811Component', () => {
  let component: Experiment1811Component;
  let fixture: ComponentFixture<Experiment1811Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1811Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
