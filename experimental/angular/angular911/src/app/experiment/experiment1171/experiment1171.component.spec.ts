import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1171Component } from './experiment1171.component';

describe('Experiment1171Component', () => {
  let component: Experiment1171Component;
  let fixture: ComponentFixture<Experiment1171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
