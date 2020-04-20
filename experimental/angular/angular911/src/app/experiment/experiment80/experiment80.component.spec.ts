import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment80Component } from './experiment80.component';

describe('Experiment80Component', () => {
  let component: Experiment80Component;
  let fixture: ComponentFixture<Experiment80Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment80Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
