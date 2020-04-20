import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1705Component } from './experiment1705.component';

describe('Experiment1705Component', () => {
  let component: Experiment1705Component;
  let fixture: ComponentFixture<Experiment1705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
