import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1116Component } from './experiment1116.component';

describe('Experiment1116Component', () => {
  let component: Experiment1116Component;
  let fixture: ComponentFixture<Experiment1116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
