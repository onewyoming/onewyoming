import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1711Component } from './experiment1711.component';

describe('Experiment1711Component', () => {
  let component: Experiment1711Component;
  let fixture: ComponentFixture<Experiment1711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
