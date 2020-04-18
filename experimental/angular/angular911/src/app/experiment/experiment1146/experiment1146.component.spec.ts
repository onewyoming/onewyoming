import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1146Component } from './experiment1146.component';

describe('Experiment1146Component', () => {
  let component: Experiment1146Component;
  let fixture: ComponentFixture<Experiment1146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
