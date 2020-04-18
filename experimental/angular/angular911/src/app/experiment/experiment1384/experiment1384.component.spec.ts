import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1384Component } from './experiment1384.component';

describe('Experiment1384Component', () => {
  let component: Experiment1384Component;
  let fixture: ComponentFixture<Experiment1384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
