import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1816Component } from './experiment1816.component';

describe('Experiment1816Component', () => {
  let component: Experiment1816Component;
  let fixture: ComponentFixture<Experiment1816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
