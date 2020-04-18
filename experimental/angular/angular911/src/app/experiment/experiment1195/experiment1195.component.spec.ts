import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1195Component } from './experiment1195.component';

describe('Experiment1195Component', () => {
  let component: Experiment1195Component;
  let fixture: ComponentFixture<Experiment1195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
