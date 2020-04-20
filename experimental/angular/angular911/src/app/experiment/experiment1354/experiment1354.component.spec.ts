import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1354Component } from './experiment1354.component';

describe('Experiment1354Component', () => {
  let component: Experiment1354Component;
  let fixture: ComponentFixture<Experiment1354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
