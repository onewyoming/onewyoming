import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1923Component } from './experiment1923.component';

describe('Experiment1923Component', () => {
  let component: Experiment1923Component;
  let fixture: ComponentFixture<Experiment1923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
