import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1760Component } from './experiment1760.component';

describe('Experiment1760Component', () => {
  let component: Experiment1760Component;
  let fixture: ComponentFixture<Experiment1760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
