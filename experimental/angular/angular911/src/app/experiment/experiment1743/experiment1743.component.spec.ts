import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1743Component } from './experiment1743.component';

describe('Experiment1743Component', () => {
  let component: Experiment1743Component;
  let fixture: ComponentFixture<Experiment1743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
