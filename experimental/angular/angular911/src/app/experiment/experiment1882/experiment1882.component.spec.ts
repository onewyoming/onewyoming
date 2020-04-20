import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1882Component } from './experiment1882.component';

describe('Experiment1882Component', () => {
  let component: Experiment1882Component;
  let fixture: ComponentFixture<Experiment1882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
