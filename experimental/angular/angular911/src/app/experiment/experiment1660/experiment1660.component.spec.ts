import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1660Component } from './experiment1660.component';

describe('Experiment1660Component', () => {
  let component: Experiment1660Component;
  let fixture: ComponentFixture<Experiment1660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
