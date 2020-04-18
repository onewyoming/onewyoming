import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1018Component } from './experiment1018.component';

describe('Experiment1018Component', () => {
  let component: Experiment1018Component;
  let fixture: ComponentFixture<Experiment1018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
