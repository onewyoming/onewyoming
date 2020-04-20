import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1523Component } from './experiment1523.component';

describe('Experiment1523Component', () => {
  let component: Experiment1523Component;
  let fixture: ComponentFixture<Experiment1523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
