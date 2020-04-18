import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1754Component } from './experiment1754.component';

describe('Experiment1754Component', () => {
  let component: Experiment1754Component;
  let fixture: ComponentFixture<Experiment1754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
