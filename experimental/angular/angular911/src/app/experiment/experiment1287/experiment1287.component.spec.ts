import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1287Component } from './experiment1287.component';

describe('Experiment1287Component', () => {
  let component: Experiment1287Component;
  let fixture: ComponentFixture<Experiment1287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
