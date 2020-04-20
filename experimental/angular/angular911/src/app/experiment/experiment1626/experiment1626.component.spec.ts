import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1626Component } from './experiment1626.component';

describe('Experiment1626Component', () => {
  let component: Experiment1626Component;
  let fixture: ComponentFixture<Experiment1626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
