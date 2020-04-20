import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1163Component } from './experiment1163.component';

describe('Experiment1163Component', () => {
  let component: Experiment1163Component;
  let fixture: ComponentFixture<Experiment1163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
