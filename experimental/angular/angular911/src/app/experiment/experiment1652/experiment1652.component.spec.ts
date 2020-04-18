import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1652Component } from './experiment1652.component';

describe('Experiment1652Component', () => {
  let component: Experiment1652Component;
  let fixture: ComponentFixture<Experiment1652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
