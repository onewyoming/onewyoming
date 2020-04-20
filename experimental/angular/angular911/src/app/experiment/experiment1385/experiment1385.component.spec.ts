import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1385Component } from './experiment1385.component';

describe('Experiment1385Component', () => {
  let component: Experiment1385Component;
  let fixture: ComponentFixture<Experiment1385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
