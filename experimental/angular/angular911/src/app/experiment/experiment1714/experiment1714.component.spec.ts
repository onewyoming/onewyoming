import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1714Component } from './experiment1714.component';

describe('Experiment1714Component', () => {
  let component: Experiment1714Component;
  let fixture: ComponentFixture<Experiment1714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
