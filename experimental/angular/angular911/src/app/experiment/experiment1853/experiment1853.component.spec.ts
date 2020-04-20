import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1853Component } from './experiment1853.component';

describe('Experiment1853Component', () => {
  let component: Experiment1853Component;
  let fixture: ComponentFixture<Experiment1853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
