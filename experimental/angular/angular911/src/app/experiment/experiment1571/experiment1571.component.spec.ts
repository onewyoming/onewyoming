import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1571Component } from './experiment1571.component';

describe('Experiment1571Component', () => {
  let component: Experiment1571Component;
  let fixture: ComponentFixture<Experiment1571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
