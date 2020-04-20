import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1210Component } from './experiment1210.component';

describe('Experiment1210Component', () => {
  let component: Experiment1210Component;
  let fixture: ComponentFixture<Experiment1210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
