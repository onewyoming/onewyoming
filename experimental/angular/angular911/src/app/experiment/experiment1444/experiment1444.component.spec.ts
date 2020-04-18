import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1444Component } from './experiment1444.component';

describe('Experiment1444Component', () => {
  let component: Experiment1444Component;
  let fixture: ComponentFixture<Experiment1444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
