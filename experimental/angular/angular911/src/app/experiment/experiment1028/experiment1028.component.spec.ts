import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1028Component } from './experiment1028.component';

describe('Experiment1028Component', () => {
  let component: Experiment1028Component;
  let fixture: ComponentFixture<Experiment1028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
