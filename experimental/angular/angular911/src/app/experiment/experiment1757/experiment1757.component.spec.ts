import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1757Component } from './experiment1757.component';

describe('Experiment1757Component', () => {
  let component: Experiment1757Component;
  let fixture: ComponentFixture<Experiment1757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
