import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1019Component } from './experiment1019.component';

describe('Experiment1019Component', () => {
  let component: Experiment1019Component;
  let fixture: ComponentFixture<Experiment1019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
