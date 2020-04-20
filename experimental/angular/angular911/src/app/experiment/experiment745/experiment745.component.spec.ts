import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment745Component } from './experiment745.component';

describe('Experiment745Component', () => {
  let component: Experiment745Component;
  let fixture: ComponentFixture<Experiment745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
