import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1092Component } from './experiment1092.component';

describe('Experiment1092Component', () => {
  let component: Experiment1092Component;
  let fixture: ComponentFixture<Experiment1092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
