import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1428Component } from './experiment1428.component';

describe('Experiment1428Component', () => {
  let component: Experiment1428Component;
  let fixture: ComponentFixture<Experiment1428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
