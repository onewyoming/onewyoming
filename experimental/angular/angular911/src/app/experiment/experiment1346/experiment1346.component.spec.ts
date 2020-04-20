import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1346Component } from './experiment1346.component';

describe('Experiment1346Component', () => {
  let component: Experiment1346Component;
  let fixture: ComponentFixture<Experiment1346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
