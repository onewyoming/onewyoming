import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1582Component } from './experiment1582.component';

describe('Experiment1582Component', () => {
  let component: Experiment1582Component;
  let fixture: ComponentFixture<Experiment1582Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1582Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
