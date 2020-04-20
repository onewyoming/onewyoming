import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1045Component } from './experiment1045.component';

describe('Experiment1045Component', () => {
  let component: Experiment1045Component;
  let fixture: ComponentFixture<Experiment1045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
