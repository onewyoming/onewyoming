import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1741Component } from './experiment1741.component';

describe('Experiment1741Component', () => {
  let component: Experiment1741Component;
  let fixture: ComponentFixture<Experiment1741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
