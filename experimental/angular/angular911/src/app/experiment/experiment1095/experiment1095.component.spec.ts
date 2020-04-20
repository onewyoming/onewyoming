import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1095Component } from './experiment1095.component';

describe('Experiment1095Component', () => {
  let component: Experiment1095Component;
  let fixture: ComponentFixture<Experiment1095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
