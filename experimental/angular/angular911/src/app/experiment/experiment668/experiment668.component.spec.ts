import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment668Component } from './experiment668.component';

describe('Experiment668Component', () => {
  let component: Experiment668Component;
  let fixture: ComponentFixture<Experiment668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
