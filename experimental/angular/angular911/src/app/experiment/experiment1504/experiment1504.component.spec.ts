import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1504Component } from './experiment1504.component';

describe('Experiment1504Component', () => {
  let component: Experiment1504Component;
  let fixture: ComponentFixture<Experiment1504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
