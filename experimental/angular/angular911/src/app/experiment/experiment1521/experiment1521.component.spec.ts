import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1521Component } from './experiment1521.component';

describe('Experiment1521Component', () => {
  let component: Experiment1521Component;
  let fixture: ComponentFixture<Experiment1521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
