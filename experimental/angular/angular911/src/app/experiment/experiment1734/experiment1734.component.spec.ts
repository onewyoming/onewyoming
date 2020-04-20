import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1734Component } from './experiment1734.component';

describe('Experiment1734Component', () => {
  let component: Experiment1734Component;
  let fixture: ComponentFixture<Experiment1734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
