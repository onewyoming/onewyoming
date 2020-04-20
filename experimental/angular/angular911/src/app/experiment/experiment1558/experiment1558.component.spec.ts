import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1558Component } from './experiment1558.component';

describe('Experiment1558Component', () => {
  let component: Experiment1558Component;
  let fixture: ComponentFixture<Experiment1558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
