import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1051Component } from './experiment1051.component';

describe('Experiment1051Component', () => {
  let component: Experiment1051Component;
  let fixture: ComponentFixture<Experiment1051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
