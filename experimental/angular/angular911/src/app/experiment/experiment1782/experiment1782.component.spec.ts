import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1782Component } from './experiment1782.component';

describe('Experiment1782Component', () => {
  let component: Experiment1782Component;
  let fixture: ComponentFixture<Experiment1782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
