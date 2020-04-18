import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1350Component } from './experiment1350.component';

describe('Experiment1350Component', () => {
  let component: Experiment1350Component;
  let fixture: ComponentFixture<Experiment1350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
