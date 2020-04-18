import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1562Component } from './experiment1562.component';

describe('Experiment1562Component', () => {
  let component: Experiment1562Component;
  let fixture: ComponentFixture<Experiment1562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
