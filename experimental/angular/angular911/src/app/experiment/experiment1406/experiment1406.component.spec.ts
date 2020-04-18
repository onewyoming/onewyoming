import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1406Component } from './experiment1406.component';

describe('Experiment1406Component', () => {
  let component: Experiment1406Component;
  let fixture: ComponentFixture<Experiment1406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
