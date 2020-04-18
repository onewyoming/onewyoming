import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1376Component } from './experiment1376.component';

describe('Experiment1376Component', () => {
  let component: Experiment1376Component;
  let fixture: ComponentFixture<Experiment1376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
