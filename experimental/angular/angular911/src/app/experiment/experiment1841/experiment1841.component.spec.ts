import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1841Component } from './experiment1841.component';

describe('Experiment1841Component', () => {
  let component: Experiment1841Component;
  let fixture: ComponentFixture<Experiment1841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1841Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
