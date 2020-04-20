import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment900Component } from './experiment900.component';

describe('Experiment900Component', () => {
  let component: Experiment900Component;
  let fixture: ComponentFixture<Experiment900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
