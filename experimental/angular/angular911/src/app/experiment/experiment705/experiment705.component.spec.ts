import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment705Component } from './experiment705.component';

describe('Experiment705Component', () => {
  let component: Experiment705Component;
  let fixture: ComponentFixture<Experiment705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
