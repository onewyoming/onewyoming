import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1001Component } from './experiment1001.component';

describe('Experiment1001Component', () => {
  let component: Experiment1001Component;
  let fixture: ComponentFixture<Experiment1001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
