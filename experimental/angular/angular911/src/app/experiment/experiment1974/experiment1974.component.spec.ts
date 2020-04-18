import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1974Component } from './experiment1974.component';

describe('Experiment1974Component', () => {
  let component: Experiment1974Component;
  let fixture: ComponentFixture<Experiment1974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
