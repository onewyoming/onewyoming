import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1706Component } from './experiment1706.component';

describe('Experiment1706Component', () => {
  let component: Experiment1706Component;
  let fixture: ComponentFixture<Experiment1706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
