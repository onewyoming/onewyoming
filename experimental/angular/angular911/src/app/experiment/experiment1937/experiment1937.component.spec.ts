import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1937Component } from './experiment1937.component';

describe('Experiment1937Component', () => {
  let component: Experiment1937Component;
  let fixture: ComponentFixture<Experiment1937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
