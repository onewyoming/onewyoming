import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1097Component } from './experiment1097.component';

describe('Experiment1097Component', () => {
  let component: Experiment1097Component;
  let fixture: ComponentFixture<Experiment1097Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1097Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
