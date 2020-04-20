import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1803Component } from './experiment1803.component';

describe('Experiment1803Component', () => {
  let component: Experiment1803Component;
  let fixture: ComponentFixture<Experiment1803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1803Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
