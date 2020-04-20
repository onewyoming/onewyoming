import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1341Component } from './experiment1341.component';

describe('Experiment1341Component', () => {
  let component: Experiment1341Component;
  let fixture: ComponentFixture<Experiment1341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
